import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Button, Modal, Typography } from '@mui/material'
import { useSelector } from "react-redux";


function GuidePage() {
    // Set up hooks for later use
    const { guide_post_id } = useParams(); // Get post id from url
    const [guideDetail, setGuideDetail] = useState({}); // Store details as state
    const [open, setOpen] = useState(false); // For modal
    const [startDate, setStartDate] = useState(''); // Store user's start date as state
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user, loaded } = useSelector(state => state.auth); // Get login state

    // Declare helper functions
    const handleOpen = () => setOpen(true); // For modal
    const handleClose = () => setOpen(false); // For modal

    const handleAddPlan = () => { // Client side validations + API call to add plan to user
        console.log(startDate)
        if (startDate === '') {
            setError('Please set a start date.')
            return;
        }

        if (!user.email) {
            navigate('/Login')
            return;
        }

        var chooseDate=new Date(startDate);
        chooseDate.setDate(chooseDate.getUTCDate() + guideDetail.plan.tripLength);
        var endDate = chooseDate.getFullYear()+'-'+('0'+(chooseDate.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDate.getDate())).slice(-2);

        let payload = {
            title: guideDetail.title,
            location: guideDetail.plan.location,
            location_image: guideDetail.headersrc,
            startDate: startDate,
            endDate: endDate,
            hotels: guideDetail.plan.hotels,
            activities: guideDetail.plan.activities,
            restaurants: guideDetail.plan.restaurants,
        }

        fetch('/api/insertguideplan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    navigate('/Plans')
                } else {
                    console.error(res.message);
                }
            })
            .catch(err => { })
    }

    const handleDateUpdate = (e) => {
        setStartDate(e.target.value)
        setError('')
    }

    // Declare styling for MUI components
    const contentStyle = {
        backgroundColor: '#47A4C7',
        borderRadius: 5,
        display: 'inline-block',
        width: 1200,
        margin: 'auto',
        marginBottom: 5,
        textAlign: 'left',
        padding: 5
    }

    const imageStyle = {
        float: 'left',
        margin: 15,
        width: 300
    }

    const buttonStyle = {
        backgroundColor: '#111111',
        color: 'white',
        '&:hover': {
            backgroundColor: '#444444',
            color: 'white',
        }
    }

    const buttonSubmitStyle = {
        marginTop: '5px',
        left: '25%',
        width: '100px',
        backgroundColor: '#47A4C7',
        color: 'white',
        '&:hover': {
            backgroundColor: '#47A4C7',
            color: 'white',
        }
    }

    const modalStyle = {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        backgroundColor: 'white',
    }

    // Fetch guide details
    useEffect(() => {
        fetch('/api/getguide?id=' + guide_post_id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    setGuideDetail(res.data.result)
                } else {
                    console.error(res.message);
                }
            })
            .catch(err => { })
    }, [])    

    // One last styling, dependent on guide details.
    const bannerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        width: 1200,
        height: 450,
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5,
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ), url(${guideDetail.headersrc})`,
        boxShadow: "0 0 50px 15px #47A4C7",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div>
            <Box sx={bannerStyle}>
                <div>
                    <Typography variant='h1'>{guideDetail.title}</Typography>
                    <Typography variant='h2'>{guideDetail.author}</Typography>
                </div>
            </Box>
            
            <Box sx={contentStyle}>
            <Typography variant='subtitle1' textAlign='left'>{guideDetail.publishDate}</Typography>
                <p>{guideDetail.p1}<img style={imageStyle} src={guideDetail.imagesrc} /></p>
                <p>{guideDetail.p2}</p> 
                <p>{guideDetail.p3}</p>
                
                <Button onClick={handleOpen} sx={buttonStyle}>Add this plan!</Button>
                
                <Modal
                open={open}
                onClose={handleClose}
                >
                    <Box sx={modalStyle}>
                        <label>Enter a start date: </label>
                        <br />
                        <input type="date" 
                        placeholder="Start date" 
                        name="startDate" 
                        style={{width: 200, margin: 'auto'}} 
                        value={startDate} 
                        onChange={(e) => handleDateUpdate(e)}/>
                        <p>{error === '' ? '' : error}</p>
                        <Button sx={buttonSubmitStyle} onClick={handleAddPlan}>Submit</Button>
                    </Box>
                    
                </Modal>
            </Box>
        </div>
    )
}

export default GuidePage