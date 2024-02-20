import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-center text-center px-[15%] text-3xl mt-36'>
            <p className='font-bold'>OUT STORY</p>
            <p className='font-extrabold text-3xl text-primary '>About us</p>
            <div className='mt-10 leading-snug flex flex-col gap-5'>
                <p> "At <span className='font-bold'> J Food</span>, we're all about making your food cravings a breeze to satisfy! Picture this: you're lounging on your couch, feeling peckish, and voila! Your favorite dishes from the coolest joints in town magically appear at your doorstep. We're here to make that dream a reality.
                </p>
                <p> We've rounded up a gang of local eateries, each armed with their own flavor-packed arsenal. Whether you're in the mood for a cheesy pizza, a fiery curry, or a juicy burger, we've got just the thing to hit the spot.
                </p>
                <p>
                    Our app? It's like having a food genie in your pocket. Just a few taps, and your order's in motion. No fuss, no hassle—just good eats, delivered with a smile.
                </p>
                <p>
                    So go ahead, kick back, relax, and let us handle the kitchen drama. With <span className='font-bold'> J Food</span>, every meal's an adventure, and every bite's a party. Let's eat!"</p>
            </div>
        </div>
    )
}

export default About
