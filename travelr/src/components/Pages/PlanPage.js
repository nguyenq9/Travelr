import React from "react";
import PlanATrip from "../PlanATrip/PlanATrip";
import PlanList from "../PlanList/PlanList";

const plan = {
  key: "0",
  title: "First Time In Rome",
  location: "Rome",
  startDate: "2023-01-01",
  endDate: "2023-01-14",
  travelers: ["John", "Mary", "Paul"],
  hotels: ["4 seasons", "Holiday Inn", "Hilton"],
  activities: ["Colosseum", "Trevi Fountain", "Vatican Museum"],
  restaurants: ["Felice e Testaccio", "Pianostrada", "Marigold"],
}

// Get the current user's plan
const plans = [plan];

class PlanPage extends React.Component {
  // const [plans, setPlans] = useState([])
  constructor(props) {
    super(props);
    this.state = {
      plans
    }
    this.addPlan = this.addPlan.bind(this);
  }

  addPlan(test) {
    plans.push(test)
    this.setState({
      plans
    })
  }

  render() {
    return (
      <React.Fragment>
        <PlanATrip addPlan={this.addPlan}/>
        <PlanList plans={this.state.plans} />
      </React.Fragment>
  
    );
  }
};

export default PlanPage;  