function IncomeChart({ totalIncome, incomeList }) {

  const dailyIncome = {};

  incomeList.forEach((income) => {
    if (!income.date) return;

    const day = income.date.split("-")[2];

    if (!dailyIncome[day]) {
      dailyIncome[day] = 0;
    }

    dailyIncome[day] += Number(income.amount) || 0;
  });

  const data = Object.entries(dailyIncome)
    .map(([day, value]) => ({
      day,
      value,
    }))
    .sort((a, b) => Number(a.day) - Number(b.day));

  
  const maxValue = Math.max(
    ...data.map((item) => item.value),
    1
  );

  return (
    <div className="income-chart-card">

      <div className="income-chart-header">
        <div>
          <h4>Daily Income Overview</h4>
          <p>Current Month</p>
        </div>

        <div className="total-income">
          <span>TOTAL INCOME</span>

          <strong>
            $
            {Number(totalIncome).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </div>
      </div>

      <div className="bar-chart">

        <div className="bar-y-axis">
          <span>{Math.ceil(maxValue)}</span>
          <span>{Math.ceil(maxValue * 0.75)}</span>
          <span>{Math.ceil(maxValue * 0.5)}</span>
          <span>{Math.ceil(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        <div className="bar-chart-content">

          <div className="bars">

            {data.length > 0 ? (
              data.map((item) => {

                const height =
                  (item.value / maxValue) * 100;

                return (
                  <div
                    className="bar-item"
                    key={item.day}
                  >

                    <div
                      className="bar"
                      style={{
                        height: `${height}%`,
                      }}
                      title={`$${item.value.toFixed(2)}`}
                    />

                    <span className="bar-label">
                      {item.day}
                    </span>

                  </div>
                );
              })
            ) : (
              <p>No income data yet</p>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default IncomeChart;