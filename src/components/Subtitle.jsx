import subtitleStyle from './Subtitle.module.css'

function Subtitle({paragraphElement,variant}){
    let applyStyles=variant ==='first' ? subtitleStyle.pElement:subtitleStyle.textalign;
    return (
        
        <p className={applyStyles}>{paragraphElement}</p>
    );
}
export default Subtitle;