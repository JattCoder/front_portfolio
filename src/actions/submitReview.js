export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';

export const submitReview = (review) => {
    return async (dispatch) =>{
        try {
            return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/reviews',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({review})})
            .then(response => response.json())
            .then(result => console.log('Back-end Response: ',result))
            .catch(err => {
                throw new Error(err);
            })
        }catch (err) {
            throw new Error(err);
        }
    }
}