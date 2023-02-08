import React from "react";
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

const plans = [plan, plan, plan, plan, plan, plan, plan, plan];


const PlanPage = () => {

  function addPlan(plan) {
    plans.push(plan)
  }

  return (
    <>
      <PlanList plans={plans} />
    </>

  );
};

export default PlanPage;  