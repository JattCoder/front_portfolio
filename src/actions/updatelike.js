export const UPDATE_LIKES = 'UPDATE_LIKES';

export const updatelike = () => {
    return async (dispatch) =>{
        let data = {likes: 1}
        return await fetch('http://localhost:2021/home',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            console.log('got data after adding like')
            console.log(json);
            dispatch({type: UPDATE_LIKES, payload: json})
        })
    }
}