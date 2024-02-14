import BulletsStyle from './BulletsStyle.module.css'

function Bullet({paragraph}) {
    return (
        <div className={BulletsStyle.bulletsdiv}>
            <div className={BulletsStyle.roundedDiv} ></div>
            <p className={BulletsStyle.para}>{paragraph}</p>
        </div>
    );
}
export default Bullet;