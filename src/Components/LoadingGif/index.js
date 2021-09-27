import React,{ useState, useEffect } from 'react';

const LoadingGif = (props) => {
    return(
        <div>
            <text style={{color:'white'}}>Welcome</text>
            <div style={{borderRadius: 50, borderWidth:'thick', borderColor: 'red', height: 100, width: 100, backgroundColor:'white'}}>

            </div>
        </div>
    )
}

export default LoadingGif;