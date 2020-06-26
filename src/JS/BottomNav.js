import React from "react"

const BottomNav = (props) => {
    return (
        <div>
            <nav id='bottom_nav' style={{zIndex: 10,bottom:0,position:'fixed',width:'100%',display:"flex",justifyContent: "center",alignItems: "center",maxHeight:"10vh" ,minHeight: "10vh", color: "black"}}>
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
