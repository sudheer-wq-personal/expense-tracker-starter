import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CATEGORIES = ['food', 'housing', 'utilities', 'transport', 'entertainment', 'salary', 'other'];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', padding: '10px 14px' }}>
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', marginBottom: 6 }}>{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: entry.color }}>
          {entry.name}: ${entry.value}
        </p>
      ))}
    </div>
  );
};

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
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="1 4" stroke="#1e1e1e" vertical={false} />
          <XAxis
            dataKey="category"
            tick={{ fill: '#666', fontSize: 11, fontFamily: 'Outfit, sans-serif', letterSpacing: '0.06em' }}
            axisLine={{ stroke: '#222' }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fill: '#555', fontSize: 11, fontFamily: 'DM Mono, monospace' }}
            axisLine={false}
            tickLine={false}
            width={52}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Legend
            wrapperStyle={{ fontSize: '0.72rem', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666', paddingTop: 16 }}
          />
          <Bar dataKey="income"  stackId="a" fill="#4ade80" radius={0} />
          <Bar dataKey="expense" stackId="a" fill="#f87171" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendByCategory;
