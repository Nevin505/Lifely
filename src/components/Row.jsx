import rowStyles from './Row.module.css'
function Row({children}){
    return (
        <div className={rowStyles.row}>
            {children}
        </div>
    );
}
export default Row;
