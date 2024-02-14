import PageStyle from './Page.module.css'
function Page({children}){
    return (
        <div className={PageStyle.container}>{children}</div>
    );
}
export default Page;