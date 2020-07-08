import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { submitReview } from '../actions/submitReview'
import '../Styles/feedback.css'

let ReviewInput = () =>{
    const [fb, setfeedback] = useState('');
    const [submitted,check] = useState(false);
    const dispatch  = useDispatch();
    const submitHandler = event => {
        event.preventDefault();
        dispatch(submitReview(fb));
        check(true);
    }
    return(
        <div>
            {submitted === false ? (
                <div className='reviewBox' id='reviewBox'>
                    <div>
                        <textarea className='message' id="subject" name="subject" placeholder="Feedback..." onChange={(event)=>{setfeedback(event.target.value)}}></textarea>
                    </div>
                    <div>
                        <button className='btn btn-sm follor btn-primary' onClick={(event)=>submitHandler(event)}>Submit Feedback</button>
                    </div>
                </div>
            ):(
                <h1 className='thankYou'>Thank You for your Feedback</h1>
            )}
        </div>
    )
}

export default ReviewInput;