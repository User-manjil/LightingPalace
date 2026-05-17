import Image from 'next/image'
import React from 'react'
import img from '../../public/images/event-full.png'
const page = () => {
  return (
    <div className='mt-10'>
      <h1>Dev Conference </h1>
      <Image  className='mt-5' width={620} height={320} src={img} alt='dev-event' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam deserunt harum consectetur molestias ullam quia nam possimus dignissimos voluptate, quod, ea incidunt sunt quos eveniet illo cupiditate necessitatibus, itaque deleniti corrupti? Placeat id ratione alias porro, commodi soluta consequatur sequi repudiandae, blanditiis corporis ab nobis maxime suscipit aliquid eum accusamus aliquam temporibus maiores tempora inventore accusantium? Delectus minus inventore eveniet ex libero aliquam ipsum nulla iusto maxime velit deserunt pariatur dolorem voluptatum quasi officia sapiente quos rem nemo, impedit tenetur, repudiandae facere? Eos fugit molestias maxime consequatur iure perferendis explicabo. Quae culpa, nisi impedit amet esse beatae corrupti ullam sunt!</p>
    </div>
  )
}

export default page
