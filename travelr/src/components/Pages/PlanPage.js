import React from "react";
import PlanATrip from "../PlanATrip/PlanATrip";
import PlanList from "../PlanList/PlanList";

const plan = {
  title: "First Time In Rome",
  location: "Rome",
  startDate: "2023-01-01",
  endDate: "2023-01-14",
  travelers: ["John", "Mary", "Paul"],
  hotels: ["4 seasons", "Holiday Inn", "Hilton"],
  activities: ["Colosseum", "Trevi Fountain", "Vatican Museum"],
  restaurants: ["Felice e Testaccio", "Pianostrada", "Marigold"],
}

const plans = [plan, plan, plan];


const PlanPage = () => {

  function addPlan(test) {
    plans.push(test)
  }

  let planList;
  let planForm = <PlanATrip addPlan={addPlan}/>;
  // if (plans.length == 0) {
    planList = <PlanList plans={plans} />
    // planForm = ""
  // }

  return (
    <>
      {planForm }
      {planList}
    </>

  );
};

export default PlanPage;  