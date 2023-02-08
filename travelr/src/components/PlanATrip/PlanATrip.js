import React from "react";
import "./PlanATrip.css"


class PlanATrip extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            location: '',
            stateDate: '',
            endDate: '',            
        }
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleCreatePlan = this.handleCreatePlan.bind(this);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleStartDateChange(event) {
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        this.setState({endDate: event.target.value});
    }

    handleCreatePlan(event){
        // Create plan here
        const plan = {
            title: "First Time In Rome",
            location: "TEST",
            startDate: "XXXX-XX-XX",
            endDate: "XXXX-XX-XX",
            travelers: ["John", "Mary", "Paul"],
            hotels: ["4 seasons", "Holiday Inn", "Hilton"],
            activities: ["Colosseum", "Trevi Fountain", "Vatican Museum"],
            restaurants: ["Felice e Testaccio", "Pianostrada", "Marigold"],
        }
        this.props.addPlan(plan);
        console.log(`Creating "${this.state.title}" to go to ${this.state.location} from ${this.state.startDate} to ${this.state.endDate}`)
        event.preventDefault();
    }

    render() {
        return (
            <div className="PlanATrip">
                <div className="plantrip">
                    <form>
                        <h2 className="title"><a href="Plan A Trip" title='Home'>Plan a new trip</a></h2>
                        <p className="or"><span></span></p>

                        <div className="plan-fields">
                            <label> <b>Trip Title</b></label>
                            <input className="location" type="text" placeholder="Enter a title" name="uname" required onChange={this.handleTitleChange}/>
                            <label > <b>Location</b></label>
                            <input className="location" type="text" placeholder="Enter a location" name="uname" required onChange={this.handleLocationChange}/>
                            {/* <label><b>Start Date</b></label>
                            <input type="date" placeholder="Start date" name="startDate" required /> */}
                            <div className="date-label">
                                <label id="start-label"><b>Start Date</b></label>
                                <label id="end-label"><b>End Date</b></label>
                            </div>
                            <div>
                                <input type="date" placeholder="Start date" name="startDate" required onChange={this.handleStartDateChange}/>
                                <input type="date" placeholder="End date" name="endDate" required onChange={this.handleEndDateChange}/>
                            </div>
                            
                            <br></br>
                            {/*<label><b>End Date</b></label>
                            <input type="date" placeholder="End date" name="endDate" required />*/}
                        </div>
                        <br></br>
                        <button className="create-btn" onClick={this.handleCreatePlan}>Create Plan</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PlanATrip;