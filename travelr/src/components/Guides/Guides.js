import React, { useEffect, useState } from "react";
import GuidePreviewBar from "./GuidePreviewBar";
import italy from "../../images/guides/italy.jpg"
import route66 from "../../images/guides/route66.jpg"
import japan from "../../images/guides/japan.jpg"

const lorem = "Synergize productive mindfulness throughput disband the squad but rehydrate as needed paddle on both sides, for shotgun approach. Prepare yourself to swim with the sharks. Lean into that problem dog and pony show, and exposing new ways to evolve our design language, yet hammer out game-plan, or (let's not try to) boil the ocean (here/there/everywhere). Open door policy closing these latest prospects is like putting socks on an octopus, or we have put the apim bol, temporarily so that we can later put the monitors on, or we need to harvest synergy effects, for helicopter view, or optics, exposing new ways to evolve our design language. Flesh that out we need to button up our approach a set of certitudes based on deductions founded on false premise. Net net. Problem territories. Downselect no need to talk to users, just base it on the space calculator, so curate. Dear hiring manager:."

function Guides() {

    const [guides, setGuides] = useState([])

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