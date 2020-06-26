import React from 'react'
import '../Styles/about.css'

const Abinfo = (props) => {
    return (
        <div>
            <h3 className='about_head'>About Me</h3>
            <p className='about_body' style={{width:'100%',paddingLeft:250,paddingRight:250,paddingTop:10}}>{props.description}</p>
        </div>
    )
}

export default Abinfo