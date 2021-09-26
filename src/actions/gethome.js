export const GET_HOME = 'GET_HOME';

export const gethome = () => {
    return async (dispatch) =>{
        try {
            return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/home'
            ).then(
                response => response.json(),
                error => console.log(error),
            ).then((json)=> {
                console.log(json);
                dispatch({type: GET_HOME, payload: json})
            })
        } catch (err) {
            throw new Error(err);
        }
    }
}
