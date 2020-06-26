export const GET_HOME = 'GET_HOME';

export const gethome = () => {
    return async (dispatch) =>{
        return await fetch('http://localhost:2021/home'
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
