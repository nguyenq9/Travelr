import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


function GuidePage() {
    const { guide_post_id } = useParams();
    const [guideDetail, setGuideDetail] = useState({});



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
                    setGuideDetail(res.data.result);
                } else {
                    console.error(res.message);
                }
            })
            .catch(err => { })
    }, [])

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

            </Box>
        </div>
    )
}

export default GuidePage