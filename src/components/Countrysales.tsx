const CountrySales = () => {
  const countries = [
    { name: 'Poland', percent: '19%' },
    { name: 'Austria', percent: '15%' },
    { name: 'Spain', percent: '13%' },
    { name: 'France', percent: '11%' },
    { name: 'Germany', percent: '10%' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Sales by countries</h2>
      <ul className="space-y-2">
        {countries.map(country => (
          <li key={country.name} className="flex justify-between text-sm">
            <span>{country.name}</span>
            <span>{country.percent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySales;
