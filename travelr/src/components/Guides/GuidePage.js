import React from 'react'
import { useParams } from 'react-router-dom'
import italy from "../../images/guides/italy.jpg"
import route66 from "../../images/guides/route66.jpg"
import japan from "../../images/guides/japan.jpg"
import selfie from "../../images/guides/selfie.jpg"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


function GuidePage() {
    const { guide_post_id } = useParams();

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
          ), url(${guide_post_id == 1 ? italy : guide_post_id == 2 ? japan : route66})`,
        boxShadow: "0 0 50px 15px #47A4C7",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

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

    return (
        <div>
            <Box sx={bannerStyle}>
                <div>
                    <Typography variant='h1'>{guide_post_id == 1 ? "Giro d'Italia" : guide_post_id == 2 ? "Essentials of Japan" : "Classic Route 66"}</Typography>
                    <Typography variant='h2'>{guide_post_id == 1 ? "Aurora Romano" : guide_post_id == 2 ? "Hiro Nakamura" : "Joseph McDonald"}</Typography>
                </div>
            </Box>
            
            

            <Box sx={contentStyle}>
            <Typography variant='subtitle1' textAlign='left'>Published: 2/7/2023</Typography>
                <p> I really like the colour but can you change it. Try making it a bit less blah it's great, can you add a beard though , or we exceed the clients' expectations the website doesn't have the theme i was going for, but it needs to be the same, but totally different can you pimp this powerpoint, need more geometry patterns, nor i love it, but can you invert all colors?. I know you've made thirty iterations but can we go back to the first one that was the best version I really like the colour but can you change it, but concept is bang on, but can we look at a better execution. Jazz it up a little can you rework to make the pizza look more delicious. I love it, but can you invert all colors? it needs to be the same, but totally different i cant pay you . <img style={imageStyle} src={selfie} />The website doesn't have the theme i was going for can my website be in english?. This red is too red. Doing some work for us "pro bono" will really add to your portfolio i promise can you make it look like this clipart i found, for could you solutionize that for me i'll pay you in a week we don't need to pay upfront i hope you understand can it handle a million in one go. Can you pimp this powerpoint, need more geometry patterns this was not according to brief can you make pink a little more pinkish. Can you help me out? you will get a lot of free exposure doing this can we barter services?.</p>

                <p>We need to make the new version clean and sexy I want you to take it to the next level. I think we need to start from scratch can you make the font bigger? can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch, but can you put "find us on facebook" by the facebook logo?</p> 
                <p>You are lucky to even be doing this for us. I'll pay you in a week we don't need to pay upfront i hope you understand you might wanna give it another shot. Can you make pink a little more pinkish concept is bang on, but can we look at a better execution, nor make it sexy this turned out different that i decscribed, and can you pimp this powerpoint, need more geometry patterns, can you make it more infographic-y. You can get my logo from facebook i think this should be fairly easy so if you just want to have a look, so you might wanna give it another shot. Can you rework to make the pizza look more delicious can you make it faster? this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, will royalties in the company do instead of cash can you make it look more designed . That's going to be a chunk of change can it be more retro, or make it pop we are a non-profit organization. Just do what you think. I trust you anyway, you are the designer, you know what to do, and this red is too red, for there is too much white space, but can you lower the price for the website?</p>
                <p>Make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch can you make the blue bluer?. I cant pay you i need this to work in internet explorer! I really like the colour but can you change it, yet mmm, exactly like that, but different, yet it looks a bit empty, try to make everything bigger could you solutionize that for me, but can you make the font bigger?. You can get my logo from facebook. It's great, can you add a beard though we are your relatives, or do less with more, yet doing some work for us "pro bono" will really add to your portfolio i promise try making it a bit less blah we need more images of groups of people having non-specific types of fun it needs to be the same, but totally different .</p>

            </Box>
        </div>
    )
}

export default GuidePage