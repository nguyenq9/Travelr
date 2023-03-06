import React, { useState, useEffect } from 'react';
import PlanList from "../PlanList/PlanList";

function PlanPage(props) {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/getplans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setPlans(data.data.result.plans)
          console.log(data.message);
        } else {
          console.error(data.message);
        }
      })
      .catch(err => { })
  }, [])


  return (
    <div className='PlanPage'>
      <PlanList plans={plans} />
    </div>
  );
};

export default PlanPage;  