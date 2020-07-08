import React from "react"
import '../Styles/navstyle.css'

const BottomNav = (props) => {
    return (
        <div>
            <nav className='bottom_nav' id='bottom_nav'>
                <img onMouseEnter={(e)=>{plussize(e)}} onMouseLeave={(e)=>{minussize(e)}} onClick={()=>{window.open(props.linkedin);}} src={require('../Images/linkedin.png')} alt='Linkedin' style={{height:40,width:40}} />
                <img onMouseEnter={(e)=>{plussize(e)}} onMouseLeave={(e)=>{minussize(e)}} onClick={()=>{window.open(props.github);}} src={require('../Images/github.svg')} alt='Github' style={{margin:50,height:40,width:40}} />
                <img onMouseEnter={(e)=>{plussize(e)}} onMouseLeave={(e)=>{minussize(e)}} onClick={()=>{window.location.href = `mailto:${props.email}`;}} src={require('../Images/email.png')} alt='Mail' style={{height:40,width:40}} />
            </nav>
        </div>
    )
}

const plussize = (e) =>{
    e.target.style.animation = 'crescendo 0.3s alternate infinite ease-in';
}

const minussize = (e) =>{
    e.target.style.animation = '';
}

export default BottomNav;
