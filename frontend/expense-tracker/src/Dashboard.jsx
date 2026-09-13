import React from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';

const Dashboard = ({ 
  totalBalance = 12500, 
  totalIncome = 18000, 
  totalExpenses = 5500,
  recentTransactions = [
    { id: 1, title: 'Salary', amount: 5000, type: 'income', date: '2026-09-01', category: 'Job' },
    { id: 2, title: 'Groceries', amount: 250, type: 'expense', date: '2026-09-03', category: 'Food' },
    { id: 3, title: 'Freelance Project', amount: 1200, type: 'income', date: '2026-09-05', category: 'Side Gig' },
    { id: 4, title: 'Gym Membership', amount: 80, type: 'expense', date: '2026-09-07', category: 'Health' },
  ],
  monthlyExpenseData = [
    { day: 'Week 1', expense: 1200 },
    { day: 'Week 2', expense: 2100 },
    { day: 'Week 3', expense: 800 },
    { day: 'Week 4', expense: 1400 },
  ],
  incomeVsExpenseData = [
    { name: 'Income', value: 18000 },
    { name: 'Expenses', value: 5500 },
  ]
}) => {

  const COLORS = ['#10B981', '#EF4444']; // أخضر للدخل، أحمر للمصاريف

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Balance</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">${totalBalance.toLocaleString()}</h3>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Wallet size={24} />
          </div>
        </div>

        {/* Total Income Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Income</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">+${totalIncome.toLocaleString()}</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <TrendingUp size={24} />
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Expenses</p>
            <h3 className="text-2xl font-bold text-rose-600 mt-1">-${totalExpenses.toLocaleString()}</h3>
          </div>
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
            <TrendingDown size={24} />
          </div>
        </div>
      </div>

      {/* 2. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Financial Overview (Pie Chart) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Financial Overview</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={incomeVsExpenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {incomeVsExpenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Overview (Bar Chart) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Last 30 Days Expenses</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyExpenseData}>
                <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="expense" fill="#EF4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* 3. Recent Transactions Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {recentTransactions.length > 0 ? (
            recentTransactions.map((tx) => (
              <div 
                key={tx.id} 
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-gray-50"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className={`p-2.5 rounded-xl ${tx.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {tx.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{tx.title}</p>
                    <p className="text-xs text-gray-400">{tx.category} • {tx.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No recent transactions found.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;