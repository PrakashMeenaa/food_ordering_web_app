import Card from '@/components/Card'
import React from 'react'

const page = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold m-10'>Top rated dishes</h1>
            <p className='text-2xl my-10 mx-10 text-primary font-semibold '>Satisfy your cravings with these fresh and flavoursome dishes.</p>
            <div className="container mx-auto">
                <div className="flex justify-start items-center mb-4">
                    <div className="w-1/3">

                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Filter by Price &#8615;</option>
                            <option>Under $10</option>
                            <option>$10 - $20</option>
                            <option>$20 - $30</option>
                            <option>Over $30</option>

                        </select>
                    </div>
                    <div className="w-1/3">

                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option >Sort by &#8615;</option>
                            <option>Name (A-Z)</option>
                            <option>Name (Z-A)</option>
                            <option>Delivery Time (Fastest First)</option>
                            <option>Delivery Time (Slowest First)</option>

                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <Card key='1' link='./food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card key='2' link='./food_images/burger.png' title='Burger' description='Between toasted buns, our burgers charm unwinds, With chicken, cheese, veggies, a symphony defined.' price='5' />
                    <Card key='3' link='/food_images/burrito.png' title='Burrito' description='Wrapped snugly in a tortilla, flavors entwine, A burrito bursts with fillings divine.' price='4' />
                    <Card key='4' link='/food_images/dosa.png' title='Dosa' description='Thin, crispy dosa, a South Indian delight, Filled with spicy masala, a culinary flight.' price='11' />
                    <Card key='5' link='/food_images/fried_meat.png' title='Fried Meat' description='Golden fried meat, a savory delight, Crispy on the outside, tender inside, a culinary height.' price='9' />
                    <Card key='6' link='/food_images/pizza.png' title='Pizza' description='A round canvas of dough, topped with savory delight, Pizzas cheesy embrace a symphony of flavor takes flight.' price='12' />
                    <Card key='7' link='/food_images/fried_salmon.png' title='Salmon' description='Golden fried salmon, a culinary treasure, Crispy exterior, tender flesh, pleasure beyond measure.' price='17' />
                    <Card key='8' link='/food_images/Grilled_lamb.png' title='Grilled Lamb' description='Grilled lamb, charred edges, flavors unite, Juicy tenderness, a culinary delight.' price='10' />
                    <Card key='9' link='/food_images/noodles.png' title='Noodles' description='Twirling strands of noodles, in a savory dance, Tossed with veggies and sauce, a culinary romance.' price='19' />
                    <Card key='10' link='/food_images/omelette.png' title='Omelette' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card key='11' link='/food_images/salmon.png' title='Salmon' description='Salmon, a jewel of the sea, pink and sublime, Grilled, baked, or seared, a culinary prime.' price='21' />
                    <Card key='12' link='/food_images/Sandwich.png' title='Sandwich' description='Layered between bread, a sandwich unfolds, Fillings unite, a tale of flavors retold.' price='6' />
                    <Card key='13' link='/food_images/veg_bowl.png' title='Veg Bowl' description='In a veggie bowl, natures bounty gleams A symphony of flavors a veggie lovers dream.' price='7' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />
                    <Card link='/food_images/biryani.png' title='Chicken Biryani' description='Chicken Biryani: A richly spiced rice dish with succulent chicken, bursting with flavors of aromatic spices and herbs.' price='19' />

                </div>
            </div>

        </div>
    )
}

export default page
