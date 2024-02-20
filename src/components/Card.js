import React from 'react'

const Card = (props) => {
  return (
    <div className='h-96 bg-slate-200 m-5 text-center rounded-xl shadow-xl hover:scale-125 duration-300 hover:z-10'>
      <div className='flex justify-center items-center h-40'>
        <img className='h-32' src={props.link} alt="" />
      </div>
      <div>
        <p className='font-bold text-xl my-2'>{props.title}</p>
        <p className='line-clamp-3 h-20 py-2 px-4 '>{props.description}</p>
        <button className='py-2 px-5 bg-primary rounded-full mt-8 font-bold text-white'>Add to cart(${props.price})</button>
      </div>
    </div>
  )
}

export default Card
