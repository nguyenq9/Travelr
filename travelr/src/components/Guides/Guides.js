import React, { useEffect, useState } from "react";
import GuidePreviewBar from "./GuidePreviewBar";

function Guides() {

    const [guides, setGuides] = useState([])

    // Fetch all guides and store in a state
    useEffect(() => {
        fetch('/api/getallguides', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    setGuides(res.data.result);
                } else {
                    console.error(res.message);
                }
            })
            .catch(err => { })

    }, [])

    return (
        <div className="Guides">
            <h1>Guides</h1>
            <h4>Get expert travel advice, destination recommendations, and pre-built itineraries from our team of experienced world travelers.</h4>
            {
                guides.map((guide) => {
                    return <GuidePreviewBar img={guide.headersrc} title={guide.title} author={guide.author} description={guide.description} guide_post_id={guide._id} key={guide._id}/>
                })
            }
        </div>
    );
}

export default Guides;