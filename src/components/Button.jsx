import ButtonStyle from './Button.module.css'

function Button({children,variant,onDisplay}){
  let buttonStyles=`${ButtonStyle.buttonStyles}  ${variant==='contained'?ButtonStyle.contained:ButtonStyle.normal}`
  return (
      <button className={buttonStyles} onClick={onDisplay}>{children}</button>
  );
}
export default Button;