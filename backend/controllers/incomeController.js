const Income = require("../models/Income");
const ExcelJS = require("exceljs");

// Add a new income


exports.addIncome = async (req, res) => {

  // Get the income data from the request body
  const { source, amount, date, icon } = req.body;

  // Check if the required fields are provided
  if (!source || !amount || !date) {
    return res.status(400).json({
      message: "Source, amount, and date are required"
    });
  }

  try {

    // Create a new income record
    const income = await Income.create({
      user: req.user.id,
      source,
      amount,
      date,
      icon: icon || "💰",
    });

    // Send a successful response
    res.status(201).json({
      message: "Income added successfully",
      income,
    });

  } catch (err) {

    // Handle errors
    res.status(500).json({
      message: "An error occurred while adding the income",
      error: err.message
    });
  }
};

// Get all incomes


exports.getIncomes = async (req, res) => {

  try {

    // Find all incomes belonging to the logged-in user
    // Sort by date from newest to oldest
    const incomes = await Income.find({
      user: req.user.id
    }).sort({
      date: -1
    });

    // Return the income records
    res.status(200).json(incomes);

  } catch (err) {

    // Handle errors
    res.status(500).json({
      message: "An error occurred while getting the income records",
      error: err.message
    });
  }
};


// Delete an income


exports.deleteIncome = async (req, res) => {

  try {

    // Find the income by ID and delete it
    // Only if it belongs to the logged-in user
    const income = await Income.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    // Check if the income was found
    if (!income) {
      return res.status(404).json({
        message: "Income record not found or you are not authorized to delete it"
      });
    }

    // Send a successful response
    res.status(200).json({
      message: "Income record deleted successfully"
    });

  } catch (err) {

    // Handle errors
    res.status(500).json({
      message: "An error occurred while deleting the income",
      error: err.message
    });
  }
};


// Export incomes to Excel


exports.exportIncomesToExcel = async (req, res) => {

  try {

    // Get all incomes belonging to the logged-in user
    // Sort them from newest to oldest
    const incomes = await Income.find({
      user: req.user.id
    }).sort({
      date: -1
    });

    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();

    // Create a worksheet
    const worksheet = workbook.addWorksheet("Income Records");

    // Define the Excel columns
    worksheet.columns = [
      {
        header: "Icon",
        key: "icon",
        width: 10
      },
      {
        header: "Source",
        key: "source",
        width: 25
      },
      {
        header: "Amount ($)",
        key: "amount",
        width: 15
      },
      {
        header: "Date",
        key: "date",
        width: 15
      },
    ];

    // Add income records to the worksheet
    incomes.forEach((income) => {

      worksheet.addRow({
        icon: income.icon,
        source: income.source,
        amount: income.amount,

        // Convert date to YYYY-MM-DD
        date: income.date.toISOString().split("T")[0],
      });

    });

    // Style the header row
    worksheet.getRow(1).eachCell((cell) => {

      // Make the header text bold and white
      cell.font = {
        bold: true,
        color: {
          argb: "FFFFFF"
        }
      };

      // Add a green background
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: "2E7D32"
        }
      };

    });

    // Set the response content type
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    // Tell the browser to download the Excel file
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=incomes-${Date.now()}.xlsx`
    );

    // Write the Excel file to the response
    await workbook.xlsx.write(res);

    // End the response
    res.end();

  } catch (err) {

    // Handle errors during Excel export
    res.status(500).json({
      message: "An error occurred while exporting the Excel file",
      error: err.message
    });
  }
};