import style from './contributions.module.css';

function ContributionGrid({ contributions }) {
  // convert to row and column
  const rows = Array.from({ length: 7 }, () => []);
  const weekCount = {};
  if (contributions) {
    contributions.forEach((contribution, index) => {
      const rowIndex = index % 7;
      rows[rowIndex].push(contribution);
    });

    // count the weeks of a month { year: {month: count}}
    rows[0].forEach(({ date }) => {
      const year = new Date(date).getFullYear();
      console.log(year);
      const monthFormatter = new Intl.DateTimeFormat('en-us', { month: 'short' });
      const month = monthFormatter.format(new Date(date));

      if (!weekCount[year]) weekCount[year] = {};
      if (!weekCount[year][month]) weekCount[year][month] = 0;

      weekCount[year][month] += 1;
    });
  }

  contributions && console.log(weekCount);

  return (
    <table className={style.calendar}>
      <thead>
        <tr>
          {contributions &&
            Object.keys(weekCount).map((year) => {
              return Object.keys(weekCount[year]).map((month) => (
                <th className={style.month} colSpan={weekCount[year][month]}>
                  {month}
                </th>
              ));
            })}
        </tr>
      </thead>

      <tbody>
        {contributions &&
          rows.map((row) => (
            <tr>
              {row.map(({ date, count, level }) => {
                const day = new Date(date).getDate();
                const monthFormatter = new Intl.DateTimeFormat('en-us', { month: 'long' });
                const month = monthFormatter.format(new Date(date));
                const tooltip = `${count || 'No'} contributions on ${month} ${day}`;

                return <td className={style.day} data-level={level} data-tooltip={tooltip}></td>;
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ContributionGrid;
