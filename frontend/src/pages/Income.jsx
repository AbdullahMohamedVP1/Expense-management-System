import { useState } from "react";

import IncomeOverview from "../components/income/IncomeOverview";
import IncomeChart from "../components/income/IncomeChart";
import IncomeCard from "../components/income/IncomeCard";
import AddIncome from "../components/income/AddIncome";

function Income() {
  const [showAddIncome, setShowAddIncome] = useState(false);

 
  const [searchTerm, setSearchTerm] = useState("");

 
  const [selectedDate, setSelectedDate] = useState("");

 
  const [incomeList, setIncomeList] = useState([
    {
      id: 1,
      title: "Tech Corp Salary",
      date: "2023-10-30",
      category: "Primary",
      amount: "4500.00",
    },
    {
      id: 2,
      title: "Upwork Freelance",
      date: "2023-10-25",
      category: "Side Hustle",
      amount: "850.00",
    },
    {
      id: 3,
      title: "Dividend Yield",
      date: "2023-10-15",
      category: "Investment",
      amount: "320.50",
    },
    {
      id: 4,
      title: "Birthday Gift",
      date: "2023-10-10",
      category: "Gift",
      amount: "200.00",
    },
  ]);


  const totalIncome = incomeList.reduce(
    (total, income) => total + Number(income.amount),
    0
  );

 
  const filteredIncome = incomeList.filter((income) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      income.title.toLowerCase().includes(search) ||
      income.category.toLowerCase().includes(search);

    const matchesDate =
      selectedDate === "" ||
      income.date === selectedDate;

    return matchesSearch && matchesDate;
  });


  const handleAddIncome = (newIncome) => {
    setIncomeList((prevIncome) => [
      {
        ...newIncome,
        id: Date.now(),
      },
      ...prevIncome,
    ]);

    setShowAddIncome(false);
  };

 
 const handleDeleteIncome = (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this income?"
  );

  if (!confirmed) {
    return;
  }

  setIncomeList((prevIncome) =>
    prevIncome.filter((income) => income.id !== id)
  );

  };


  const handleExportCSV = () => {
    if (filteredIncome.length === 0) {
      alert("No income data to export.");
      return;
    }

    const headers = [
      "Income Source",
      "Date",
      "Category",
      "Amount",
    ];

    const rows = filteredIncome.map((income) => [
      income.title,
      income.date,
      income.category,
      income.amount,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob(
      ["\uFEFF" + csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "income-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  
  const clearDateFilter = () => {
    setSelectedDate("");
  };

  return (
    <div className="income-page">

      {/* =========================
          Header
      ========================== */}

      <div className="income-header">

        <div>
          <h2>Income Management</h2>
        </div>

        <div className="income-actions">

          {/* Search */}
          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          {/* Date Filter */}
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(e.target.value)
            }
          />

          {/* Clear Date */}
          {selectedDate && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={clearDateFilter}
            >
              Clear
            </button>
          )}

          <button
            type="button"
            className="icon-btn"
          >
            🔔
          </button>

        </div>

      </div>

      {/* =========================
          Overview
      ========================== */}

      <IncomeOverview
        totalIncome={totalIncome}
        onAddIncome={() =>
          setShowAddIncome(true)
        }
        onExport={handleExportCSV}
      />

      {/* =========================
          Chart
      ========================== */}

      <IncomeChart
        totalIncome={totalIncome}
        incomeList={incomeList}
      />

      {/* =========================
          Recent Income
      ========================== */}

      <div className="recent-income">

        <div className="recent-header">

          <div>
            <h3>Recent Income</h3>

            {(searchTerm || selectedDate) && (
              <small className="text-muted">
                Showing {filteredIncome.length} result
                {filteredIncome.length !== 1
                  ? "s"
                  : ""}
              </small>
            )}
          </div>

          <button
            type="button"
            className="view-all"
            onClick={() => {
              setSearchTerm("");
              setSelectedDate("");
            }}
          >
            View All
          </button>

        </div>

        <div className="row g-3">

          {filteredIncome.length > 0 ? (

            filteredIncome.map((income) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={income.id}
              >

                <IncomeCard
                  title={income.title}
                  date={income.date}
                  category={income.category}
                  amount={Number(
                    income.amount
                  ).toFixed(2)}
                  onDelete={() =>
                    handleDeleteIncome(
                      income.id
                    )
                  }
                />

              </div>

            ))

          ) : (

            <div className="col-12">

              <div className="alert alert-light">
                No income found.
              </div>

            </div>

          )}

          {/* Add New Source */}

          <div className="col-12 col-md-6 col-lg-4">

            <button
              type="button"
              className="add-source-card w-100"
              onClick={() =>
                setShowAddIncome(true)
              }
            >

              <span className="add-source-icon">
                +
              </span>

              <span>
                Add New Source
              </span>

            </button>

          </div>

        </div>

      </div>

      {/* =========================
          Add Income Modal
      ========================== */}

      {showAddIncome && (

        <AddIncome
          onClose={() =>
            setShowAddIncome(false)
          }
          onAdd={handleAddIncome}
        />

      )}

    </div>
  );
}

export default Income;