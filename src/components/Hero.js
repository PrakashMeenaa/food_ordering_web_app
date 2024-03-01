import React from 'react'
import Card from './Card'
import Searchbar from './Searchbar'
import Link from 'next/link'

function Hero() {
    return (
        <>
           <div > 
                <Searchbar/>
           </div>
            <div className='w-auto h-max flex flex-col overflow-hidden md:flex-row justify-around items-center relative'>
                <img className='w-1/2 ' src="/Hero.png" alt="Dish image" />
                <div className='w-[70%] md:w-1/2 flex flex-col text-center text-sm md:text-2xl lg:text-4xl ' >
                    <p className='px-7'>Get your <span className='font-bold fl'>food</span> fix in a flick, straight to your door, quick!</p>
                    <div className=' flex justify-around my-5 px-6 text-center'>
                        <button className='px-5 py-3 bg-primary rounded-full text-white '>ORDER NOW &rArr;</button>
                        <button className=' font-bold  hover:text-gray-600' >Learn more &rArr;</button>
                    </div>
                </div>
            </div>
            <div className='w-screen overflow-x-hidden flex justify-center items-center -my-[10%] relative'>
                <img className="w-1/3   rounded-r-full relative -left-[25%] md:-left-[30%]" src="/food_images/pizza.png" alt="" />
                <Link  href={'/menu'} className='text-center h-max '>
                    <p className='font-bold text-orange-600 text-xl md:text-2xl'>Check Out</p>
                    <p className='text-primary  text-4xl md:text-5xl font-bold'>Menu</p>
                </Link>
                <img className="w-1/3   rounded-r-full relative -right-[25%] md:-right-[30%]" src="/food_images/pizza.png" alt="" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-[7%] mt-[5%] '>
                <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19'/>
                <Card link='/food_images/burger.png' title='Kadai Chicken' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19'/>
                <Card link='/food_images/pizza.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19'/>
                
            </div>
        </>
    )
}

export default Hero
