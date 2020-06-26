import React from 'react'
import { useDispatch } from 'react-redux'
import { submitReview } from '../actions/submitReview'

let ReviewInput = () =>{
    const dispatch  = useDispatch();
    return(
        <div>
            <div id='reviewBox'>
                <div>
                    <textarea id="subject" name="subject" placeholder="Feedback..." style={inputStyle}></textarea>
                </div>
                <div>
                    <button className='btn btn-sm follor btn-primary' onClick={()=>{submitHandler(dispatch)}}>Submit Feedback</button>
                </div>
            </div>
        </div>
    )
}

let submitHandler = (dispatch) =>{
    let review = document.getElementById('subject') 
    dispatch(submitReview(review.value));
    review.value = ''
    displayMessage();
}

let displayMessage = () =>{
    let outside = document.getElementById('outsidediv')
    let reviewBox = document.getElementById('reviewBox')
    reviewBox.innerHTML = 'Thankyou for your Feedback'
    reviewBox.style.color = 'white'
    reviewBox.style.fontSize = '50px'
    reviewBox.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    outside.style.marginTop = '300px'


}

export default ReviewInput;

let inputStyle = {
    padding:10,
    borderRadius:'1%',
    height:'300px', 
    width:'700px', 
    color:'white', 
    background: 'transparent',
    resize: 'none'
}