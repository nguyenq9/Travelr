
import React from 'react'
import Plans from '../Plans/Plans';
import './PlanList.css'
import { useNavigate } from 'react-router-dom';

function PlanList (props) {
    const navigate = useNavigate();
    return (
        <div className="PlanList">
            {props.plans.map(b => {
                return <Plans key={b.title} plan={b} navigate={navigate}/>
            })}
        </div>
    );
}


export default PlanList;