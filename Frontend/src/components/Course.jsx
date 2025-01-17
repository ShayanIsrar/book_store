import React from 'react'
import list from '../../public/List.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='text-center mt-32 items-center justify-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia numquam laboriosam qui earum non amet. Eum numquam, unde dicta sapiente debitis rem sit nemo sunt maiores voluptatibus labore quo sed aliquid facilis adipisci libero possimus dolorem omnis, repellat consectetur officia nulla laboriosam eius. Asperiores,
          </p>
          <Link to={'/'}>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
