const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  addIncome,
  getIncomes,
  deleteIncome,
  exportIncomesToExcel,
} = require("../controllers/incomeController");

const router = express.Router();


router.post("/", protect, addIncome); 
router.get("/", protect, getIncomes);  
router.get("/export", protect, exportIncomesToExcel); 
router.delete("/:id", protect, deleteIncome); 

module.exports = router;
