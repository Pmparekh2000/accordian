import React from 'react'

const Accordian = ({title="", description="", index=0, toggleAccordian=false, setToggleAccordian=()=>{}}) => {
    const handleAccordianToggle = (index) => {
        setToggleAccordian((prevValue) => prevValue?.map((_, idx) => idx === index ? !prevValue[index] : false));
    };

  return (
    <div className='single-accordian-container'>
        <div className='accordian'>
            <div>
                {title}
            </div>
            {toggleAccordian ? <div>
                {description}
            </div> : <></>}
        </div>
        <div className='accordian-toggle-container' onClick={() => handleAccordianToggle(index)}>
            {toggleAccordian ? "-" : "+" }
        </div>
    </div>
  )
}

export default Accordian