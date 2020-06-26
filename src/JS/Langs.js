import React from 'react';
import '../Styles/about.css'

const Langs = (obj) => {
    return (
        <div>
            <img className='popup' onMouseEnter={(e)=>{e.target.title = obj.img.name}} src={obj.img.img} alt={obj.img.name}/>
        </div>
    )
}
export default Langs