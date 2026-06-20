import React from "react";

function TeamHeader() {
  return (
    <div className="card bg-dark border-secondary text-white mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="team-badge">CO</div>
          </div>

          <div className="col">
            <h4 className="mb-0 fw-bold">Colombia</h4>
          </div>

          <div className="col-md-2">
            <small className="text-secondary d-block">CONVOCADOS</small>
            <h5>26</h5>
          </div>

          <div className="col-md-2">
            <small className="text-secondary d-block">EDAD PROMEDIO</small>
            <h5>27.4</h5>
          </div>

          <div className="col-md-2">
            <small className="text-secondary d-block">GRUPO</small>
            <h5>H</h5>
          </div>

          <div className="col-md-2">
            <small className="text-secondary d-block">RANKING FIFA</small>
            <h5>#11</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;
