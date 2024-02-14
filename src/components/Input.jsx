import Input from './Input.module.css'

function InputElement({InputType,placeholderText,onChangeName}){
    return (
        (InputType==='password' ?  <div className={Input.positon}>
       
        <input className={Input.InputElement} type={InputType} placeholder={placeholderText}/>
        <div className={Input.circle}></div>
      </div>:    <input className={Input.InputElement} type={InputType} placeholder={placeholderText} onChange={onChangeName}/>)
    );
}
export default InputElement;