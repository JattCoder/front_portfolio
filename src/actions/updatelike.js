export const UPDATE_LIKES = 'UPDATE_LIKES';

export const updatelike = () => {
    return async (dispatch) =>{
        try {
            let data = {likes: 1}
            return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/home',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(
                response => response.json()
            ).then((json)=> {
                dispatch({type: UPDATE_LIKES, payload: json})
            })
        } catch(err) {
            throw new Error(err);
        } 
    }
}