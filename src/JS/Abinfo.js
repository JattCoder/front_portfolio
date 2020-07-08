import React from 'react'
import '../Styles/about.css'

const Abinfo = (props) => {
    return (
        <div>
            <h3 className='about_head'>About Me</h3>
            <p className='about_body'>{props.description}</p>
        </div>
    )
}

export default Abinfo