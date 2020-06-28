export const GET_HOME = 'GET_HOME';

export const gethome = () => {
    return async (dispatch) =>{
        return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/home'
        ).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            console.log('sending data of home')
            console.log(json);
            dispatch({type: GET_HOME, payload: json})
        })
    }
}
