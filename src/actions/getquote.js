export const GET_QUOTE = 'GET_QUOTE';

export const getquote = () => {
    return async (dispatch) =>{
        return await fetch('https://harmandeep-mand-portfolio.herokuapp.com/quote'
        ).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            dispatch({type: GET_QUOTE, data: json})
        })
    }
}