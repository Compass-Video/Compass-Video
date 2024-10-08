import styles from './ButtonsMain.module.css';
import CustomBtn from '../../Buttons/CustomBtn/CustomBtn'
import PlusBtn from '../../Buttons/PlusBtn/PlusBtn'
import FavBtn from '../../Buttons/FavBtn/FavBtn'
import SeeNow from '../../Buttons/see-now/SeeNow'


const ButtonsMain = ({ trailer, onSeeNowClick }: { trailer?: boolean, onSeeNowClick: () => void }) => {
    return (
        <div className={styles.buttons}>
            <SeeNow onClick={onSeeNowClick} />
            <CustomBtn trailer={trailer} />
            <div className={styles.circlesButtons}>
            <PlusBtn />
            <FavBtn />
            </div>
        </div>
    )
}

export default ButtonsMain