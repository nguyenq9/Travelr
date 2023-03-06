import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import "./PlanATrip.css"

const style = {
    color: 'red'
}

const formSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    location: z.string().min(1, "Enter a location"),
    startDate: z.string().min(1,"Enter a start date."),
    endDate: z.string().min(1, "Enter an end date."),
})

function PlanATrip(props) {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema)
    });
    // const [title, setTitle] = useState('');
    // const [location, setLocation] = useState('');
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    

    function handleCreatePlan(event){
        // console.log(`Creating "${title}" to go to ${location} from ${startDate} to ${endDate} with ${travelers}`)
        console.log(event)
        fetch('/api/createplan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
          })
            .then(res => res.json())
            .then(event => {
              if (event.status === 'success') {
                console.log(event.message);
              } else {
                console.error(event.message);
              }
            })
            .catch(err => { })
    }

        return (
            <div className="PlanATrip">
                <div className="plantrip">
                    <form onSubmit={handleSubmit(handleCreatePlan)}>
                        <h2 className="title"><a href="Plan A Trip" title='Home'>Plan a new trip</a></h2>
                        <p className="or"><span></span></p>

                        <div className="plan-fields">
                            <label> <b>Trip Title</b><b style={style}> *</b></label>
                            <input className="location" type="text" placeholder="Enter a title" name="uname" {...register("title")} />
                            {errors.title && <p className="text-danger">{errors.title?.message}</p>}

                            <label > <b>Location</b> <b style={style}> *</b></label>
                            <input className="location" type="text" placeholder="Enter a location" name="uname" {...register("location")} />
                            {errors.location && <p className="text-danger">{errors.location?.message}</p>}

                            <div className="date-label">
                                <label id="start-label"><b>Start Date</b><b style={style}> *</b></label>
                                <label id="end-label"><b>End Date</b><b style={style}> *</b></label>
                            </div>
                            <div>
                                <input type="date" placeholder="Start date" name="startDate" {...register("startDate")} />
                                {errors.startDate && <p className="text-danger">{errors.startDate?.message}</p>}

                                <input type="date" placeholder="End date" name="endDate" {...register("endDate")} />
                                {errors.endDate && <p className="text-danger">{errors.endDate?.message}</p>}
                            </div>
                            
                            <br></br>
                            {/*<label><b>End Date</b></label>
                            <input type="date" placeholder="End date" name="endDate" required />*/}
                        </div>
                        <br></br>
                        <button type="submit" className="create-btn">Create Plan</button>
                    </form>
                </div>
            </div>
        );

}

export default PlanATrip;