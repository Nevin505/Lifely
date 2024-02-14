import SectionStyles from './Section.module.css'

function Section({children}){
    return <div className={SectionStyles.sectionPage}>{children}</div>
}
export default Section;