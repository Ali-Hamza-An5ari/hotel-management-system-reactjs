export const increment = (num) =>
{
    return (dispatch)=>
    {
        dispatch({
            type:'inc',
            payload:num
        })
    }
}
export const decrement = (num) =>
{
    return (dispatch)=>
    {
        dispatch({
            type:'dec',
            payload:num
        })
    }
}