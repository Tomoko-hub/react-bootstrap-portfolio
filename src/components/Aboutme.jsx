import React from 'react'

import { motion } from 'framer-motion'
import BlackBoxTransition from '../utils/BlackBoxTransition'

const Aboutme = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
        className='container'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition= {{ duration: 0.5, delay: 0.5 }}
        exit={{ opacity:0 }}
      >
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi alias vel, ut nobis reprehenderit. Minima rem, asperiores suscipit officia placeat nam nobis, odit dolorum veniam quibusdam, eius laborum explicabo! Eligendi recusandae exercitationem magnam illum est explicabo cumque maxime unde dolorem voluptates voluptas, laborum enim commodi fugiat itaque quo sequi mollitia id reprehenderit at, eius dignissimos, asperiores alias ab. Ut maiores id exercitationem aspernatur porro unde rem nemo ea provident fugit, quae dignissimos recusandae natus iure deleniti eius! Illo consequuntur nisi nesciunt vero aliquam provident laboriosam, doloremque consequatur fuga placeat, quidem sint. Sequi veniam quae minima eius, dolorum expedita maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi alias vel, ut nobis reprehenderit. Minima rem, asperiores suscipit officia placeat nam nobis, odit dolorum veniam quibusdam, eius laborum explicabo! Eligendi recusandae exercitationem magnam illum est explicabo cumque maxime unde dolorem voluptates voluptas, laborum enim commodi fugiat itaque quo sequi mollitia id reprehenderit at, eius dignissimos, asperiores alias ab. Ut maiores id exercitationem aspernatur porro unde rem nemo ea provident fugit, quae dignissimos recusandae natus iure deleniti eius! Illo consequuntur nisi nesciunt vero aliquam provident laboriosam, doloremque consequatur fuga placeat, quidem sint. Sequi veniam quae minima eius, dolorum expedita maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi alias vel, ut nobis reprehenderit. Minima rem, asperiores suscipit officia placeat nam nobis, odit dolorum veniam quibusdam, eius laborum explicabo! Eligendi recusandae exercitationem magnam illum est explicabo cumque maxime unde dolorem voluptates voluptas, laborum enim commodi fugiat itaque quo sequi mollitia id reprehenderit at, eius dignissimos, asperiores alias ab. Ut maiores id exercitationem aspernatur porro unde rem nemo ea provident fugit, quae dignissimos recusandae natus iure deleniti eius! Illo consequuntur nisi nesciunt vero aliquam provident laboriosam, doloremque consequatur fuga placeat, quidem sint. Sequi veniam quae minima eius, dolorum expedita maiores?</p>
      </motion.div>
    </BlackBoxTransition>
  )
}

export default Aboutme