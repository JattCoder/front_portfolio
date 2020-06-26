import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/navstyle.css'

const TopNav = () => {
    return (
        <div>
            <nav id='top_nav' style={{zIndex: 10,top:0,position:'fixed',display:"flex",width:'100%',justifyContent: "space-around",alignItems: "center",maxHeight:'20vh',minHeight: "10vh", color: "white"}}>
                <img src={require('../Images/logo_s_s.png')} alt='Logo' style={{margin:10,height:80,width:80}} />
                <ul style={{width: "22%",display: "flex", justifyContent: "space-around", listStyle: "none"}}>
                  <Link className='navStyle' to='/'>
                    <li>Home</li>
                  </Link>
                  <Link className='navStyle' to='/sorting'>
                    <li>Sorting</li>
                  </Link>
                  <Link className='navStyle' to='/apps'>
                    <li>Apps</li>
                  </Link>
                  <Link className='navStyle' to='/about'>
                    <li>About</li>
                  </Link>
                  <Link className='navStyle' to='/review'>
                    <li>Feedback</li>
                  </Link>
                </ul>
            </nav>
        </div>
    )
}
export default TopNav