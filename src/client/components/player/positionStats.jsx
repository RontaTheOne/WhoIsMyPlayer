import React from "react";

function positionStats() {
  const stats = [
    {
      title: "PORTEROS",
      total: 3,
      best: "Vargas 7.8",
    },
    {
      title: "DEFENSAS",
      total: 8,
      best: "Cuesta 7.6",
    },
    {
      title: "MEDIOCAMPISTAS",
      total: 9,
      best: "Carrascal 8.1",
    },
    {
      title: "DELANTEROS",
      total: 6,
      best: "Díaz 8.4",
    },
  ];

  return (
    <div className="position-stats mb-4">
        <div className="row g-3 mb-4">
        {stats.map((item) => (
            <div className="col-md-3" key={item.title}>
            <div className="card bg-dark border-0 h-100">
                <div className="card-body">
                <small className="text-secondary">{item.title}</small>

                <h2 className="fw-bold">{item.total}</h2>

                <small className="text-warning">{item.best}</small>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>    
  );
}

export default positionStats;
