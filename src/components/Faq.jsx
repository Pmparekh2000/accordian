import React, { useState } from 'react'
import Accordian from './Accordian'

const Faq = ({accordianData = []}) => {
    const [toggleAccordian, setToggleAccordian] = useState(Array.from({length: accordianData.length}).fill(false));
  return (
    <div className='accordian-container'>
        {
            accordianData?.map((accData, index) => {
                return (
                    <Accordian key={accData?.id} {...accData} index={index} toggleAccordian={toggleAccordian[index]} setToggleAccordian={setToggleAccordian}/>
                )
            })
        }
    </div>
  )
}

export default Faq