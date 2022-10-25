export const withdrawFund = (amount) =>
{
    return (dispatch) =>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}
export const depositFund = (amount) =>
{
    return (dispatch) =>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}