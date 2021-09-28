export const GET_HOME = 'GET_HOME';

export const gethome = () => {
    return async (dispatch) =>{
        try {
            return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/'
            ).then(
                response => response.json(),
                error => console.log(error),
            ).then((json)=> {
                //Distribute the data to store in proper manner
                console.warn('Receiving Data: ',json)
                //dispatch({type: GET_HOME, payload: json})
            })
        } catch (err) {
            throw new Error(err);
        }
    }
}
