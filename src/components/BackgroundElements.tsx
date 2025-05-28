import React, { useEffect, useState } from 'react';

const BackgroundElements: React.FC = () => {
  // Formula elements that will appear in the background
  const formulas = [
    'SUM(A1:A10)', 
    'AVERAGE(B2:B8)', 
    'COUNTIF(C1:C20,">50")', 
    'VLOOKUP(E2,A1:B10,2,FALSE)', 
    'IF(D1>100,"High","Low")', 
    'INDEX(A1:D10,MATCH(F2,A1:A10,0),3)',
    'SELECT * FROM customers WHERE region = "East"',
    'GROUP BY category HAVING COUNT(*) > 10',
    'JOIN orders ON customers.id = orders.customer_id',
    'CASE WHEN sales > 1000 THEN "High" ELSE "Low" END',
    'df.groupby("category").mean()',
    'plt.scatter(x, y)',
    'model.fit(X_train, y_train)',
    'np.array([1, 2, 3])'
  ];

  // Generate random positions for the data points
  const [dataPoints, setDataPoints] = useState<Array<{ top: string; left: string; color: string }>>([]);

  useEffect(() => {
    const points = [];
    const colors = ['bg-primary-500', 'bg-secondary-500', 'bg-accent-500'];
    
    for (let i = 0; i < 30; i++) {
      points.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setDataPoints(points);
  }, []);

  return (
    <>
      {/* Formula background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {formulas.map((formula, index) => (
          <div 
            key={index}
            className="absolute text-slate-600 text-opacity-20 font-mono text-lg sm:text-xl md:text-2xl whitespace-nowrap"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      {/* Data points */}
      {dataPoints.map((point, index) => (
        <div
          key={index}
          className={`data-point ${point.color}`}
          style={{
            top: point.top,
            left: point.left,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundElements;