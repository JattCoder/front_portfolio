import React from 'react';
import { useDispatch } from 'react-redux'
import { updatelike } from '../actions/updatelike'
import '../Styles/heartbeat.css'

const Like = (props) => {
    const dispatch  = useDispatch();
    let result = 0;
    if(props.like){
        if(props.like > 999 && props.like < 9999){
            result = '+'+`${props.like}`[0]+'k'
        }else if(props.like > 9999){
            result = '+'+`${props.like}`[0]+`${props.like}`[1]+'k'
        }else{
            result = props.like
        }
    }
    return (
        <div>
            <div style={{width:'100%',background:'white'}}>
                <button id='like_btn' style={btnstylie}>
                    <img id='beat' className='heart' alt={props.like} src={require('../Images/like.webp')} onClick={()=>{run(dispatch)}}/>
                    <h1 id='showlikez' style={{marginTop:'5px' ,display: 'none', fontSize: '14px'}}>{result}</h1>
                </button>
            </div>
        </div>
    )
}

let run = (dispatch) => {
    let heart = document.getElementById('beat');
    let btn = document.getElementById('like_btn');
    let show = document.getElementById('showlikez');
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                show.style.display = 'none';
                btn.style.backgroundColor = 'transparent'
                heart.style.display = ''
                heart.style.animation = 'crescendo 0.8s alternate infinite ease-in'
            },1200)
            show.style.animation = 'fadeout 1.2s alternate ease-in'
            btn.style.animation = 'btnout 4.8s'
            heart.style.animation = 'heartin 0.8s alternate ease-in'
        },1000)
        btn.style.backgroundColor = 'red'
        heart.style.display = 'none'
        show.style.display = ''
        show.style.animation = 'fadein 1.0s'
    },800)
    btn.style.animation = 'btnin 4.8s'
    heart.style.animation = 'heartout 0.8s alternate ease-in'
    dispatch(updatelike());
}

export default Like

const btnstylie = {
    alignItems: 'center',
    color: 'white',
    top:0,
    marginTop:40,
    position:'fixed',
    borderRadius: '50%',
    height: 50,
    width: 50,
    backgroundColor: 'transparent',
    outline: 'none',
    zIndex: 10
}