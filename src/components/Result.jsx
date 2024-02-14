import ResultStyle from './Result.module.css'
function Result({children}){
    return(<div className={ResultStyle.displayResult}>
            {children}
    </div>);
}
export default Result;