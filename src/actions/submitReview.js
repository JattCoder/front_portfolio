export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';

export const submitReview = (review) => {
    return async (dispatch) =>{
        return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/reviews',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review})
        }).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            //dispatch({type: SUBMIT_REVIEW, payload: json})
        })
    }
}