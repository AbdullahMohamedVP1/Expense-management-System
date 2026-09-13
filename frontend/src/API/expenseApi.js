import API from './axiosInstance';

// These paths match the Expense Router supplied by Backend Person 3.
// Base URL: /api/expense

export const addExpense = async (expenseData) => {
  const response = await API.post('/add', expenseData);
  return response.data;
};

export const getExpenses = async () => {
  const response = await API.get('/get');
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};

export const downloadExpensesExcel = async () => {
  return API.get('/downloadexcel', { responseType: 'blob' });
};
