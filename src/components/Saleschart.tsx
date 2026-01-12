import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '1 Jul', revenue: 80, margin: 60 },
  { date: '2 Jul', revenue: 140, margin: 95 },
  { date: '3 Jul', revenue: 120, margin: 130 },
  { date: '4 Jul', revenue: 60, margin: 40 },
  { date: '5 Jul', revenue: 110, margin: 150 },
  { date: '6 Jul', revenue: 80, margin: 60 },
  { date: '7 Jul', revenue: 90, margin: 70 },
  { date: '8 Jul', revenue: 140, margin: 130 },
  { date: '9 Jul', revenue: 90, margin: 120 },
  { date: '10 Jul', revenue: 200, margin: 100 },
  { date: '11 Jul', revenue: 90, margin: 80 },
];

const SalesChart = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Product sales</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Bar dataKey="revenue" fill="#008000" />
          <Bar dataKey="margin" fill="#C6AA58" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
