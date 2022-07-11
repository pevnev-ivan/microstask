
type ButtonType = {
    name: string
    callBack: ()=> void
}

export const Button=(props:ButtonType)=> {
    const onClickHandler = () => {
        props.callBack()

    }
    return(
        <span>
          <button onClick={onClickHandler}>{props.name}</button>
        </span>
    )
}