import React from 'react'

const Cards = ({item}) => {
    
  return (
    <>
      <div className='mb-10 mt-10'>
      <div className="card bg-base-100 sm:w-80 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image} 
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-pink-500 text-white">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white hover:p-2 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
