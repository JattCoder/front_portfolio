import React from 'react'
import LangsShow from './Langs';

const Ablangs = () =>{
    return(
        <div>
            <nav style={{bottom:0,position:'fixed',width:'100%',display:"flex",justifyContent: "center",alignItems: "center",maxHeight:"10vh" ,minHeight: "10vh", color: "black"}}>
              {this.state.langs.map((object, i)=><LangsShow img={object} key={i} />)}
            </nav>
        </div>
    )
}

export default Ablangs