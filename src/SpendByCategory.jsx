import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CATEGORIES = ['food', 'housing', 'utilities', 'transport', 'entertainment', 'salary', 'other'];

function SpendByCategory({ transactions }) {
  const data = CATEGORIES.map(category => {
    const income = transactions
      .filter(t => t.category === category && t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter(t => t.category === category && t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return { category, income, expense };
  }).filter(d => d.income > 0 || d.expense > 0);

  if (data.length === 0) return null;

  return (
    <div className="spend-by-category">
      <h2>Income &amp; Expense by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(v) => `$${v}`} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Bar dataKey="income" stackId="a" fill="#4ECDC4" />
          <Bar dataKey="expense" stackId="a" fill="#FF6B6B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendByCategory;
