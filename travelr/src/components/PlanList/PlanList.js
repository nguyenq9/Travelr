
import React from 'react'
import Plans from '../Plans/Plans';
import './PlanList.css'

function PlanList (props) {
    return (
        <div className="PlanList">
            {props.plans.map(b => {
                return <Plans plan={b}/>
            })}
        </div>
    );
}


export default PlanList;