import HeaderStyle from './Header.module.css'
function Header({h1Content}){
    return (
        <h1 className={HeaderStyle.Headername}>{h1Content}</h1>
        );
}

export default Header;