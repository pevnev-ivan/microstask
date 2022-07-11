import s from './button.module.css'

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
          <button className={s.Button} onClick={onClickHandler}>{props.name}</button>
        </span>
    )
}