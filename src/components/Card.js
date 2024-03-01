"use client";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Card = (props) => { 
  
  const { addItemToCart } = useContext(CartContext);
  const addToCartHandler = () => {
   
    addItemToCart({
      key: Math.random(),
      title: props.title,
      price: props.price,
      image: props.link,
      description: props.description
      
    });
  };

  return (
    <div className="h-96 bg-slate-50 m-5 text-center rounded-xl shadow-xl hover:scale-125 duration-300 hover:z-10 ">
      <div className="flex justify-center items-center h-40">
        <img className="h-44 hover:scale-150 duration-300 " src={props.link} alt="" />
      </div>
      <div>
        <p className="font-bold text-xl my-2 ">{props.title}</p>
        <p className="line-clamp-3 h-20 py-2 px-4 ">{props.description}</p>
        <button onClick={addToCartHandler} className="py-2 px-5 bg-primary rounded-full mt-8 font-bold text-white">
          Add to cart(${props.price})
        </button>
      </div>
    </div>
  );
};

export default Card;
