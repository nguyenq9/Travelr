import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { CardContent, Collapse, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


// Builds preview bar for guides on the guides home page.
// Takes guide details to build custom preview bars
function GuidePreviewBar(props) {
    // Set up hooks for later use
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate();

    // Declare MUI stylings
    const glow = {
        boxShadow: "0 0 50px 5px #48abe0"
    }

    const cardStyle = {
        width: 1200,
        margin: 'auto',
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2)
          ), url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const headerStyle = {
        color: 'white',
        fontFamily: "Terry Script, sans-serif",
        marginTop: 0
    }

    const descStyle = {
        color: 'white',
        fontFamily: "Terry Script, sans-serif",
        backdropFilter: "blur(7px)",
        fontSize: 22,
        lineHeight: 1.2,
        width: 1000,
        margin: 'auto',
        marginTop: 4
    }

    const collapseStyle = {
        marginBottom: 5
    }

    return (
        <Collapse in={isHovered} collapsedSize={145} sx={collapseStyle}>
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate("/Guides/" + props.guide_post_id)}
                sx={cardStyle}>

                <CardContent>
                    <Typography variant="h3" align='left' sx={headerStyle}>{props.title}</Typography>
                    <Typography variant="h4" align='left' sx={headerStyle}>{props.author}</Typography>
                    <Typography sx={descStyle} >{props.description}</Typography>
                </CardContent>
            </Card>
        </Collapse>
    )
}

export default GuidePreviewBar