import React, { useState, useEffect } from 'react';
import { get } from 'react-hook-form';
import PlanATrip from "../PlanATrip/PlanATrip";
import PlanList from "../PlanList/PlanList";

const plan = {
  key: 0,
  title: "First Time In Rome",
  location: "Rome",
  startDate: "2023-01-01",
  endDate: "2023-01-14",
  travelers: ["John", "Mary", "Paul"],
  hotels: ["4 seasons", "Holiday Inn", "Hilton"],
  activities: ["Colosseum", "Trevi Fountain", "Vatican Museum"],
  restaurants: ["Felice e Testaccio", "Pianostrada", "Marigold"],
}


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