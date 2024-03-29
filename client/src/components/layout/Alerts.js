import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContex";

const Alerts = () => {
  const alertContex = useContext(AlertContext);
  return (
    alertContex.alerts.length > 0 &&
    alertContex.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    ))
  );
};
export default Alerts;
