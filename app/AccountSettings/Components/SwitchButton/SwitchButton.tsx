import styles from './SwitchButton.module.scss'

interface Props {
    isChecked?: boolean
}

const SwitchButton = ({ isChecked }: Props) => {
    

    const onSwitchClick = ()=>{
        
    }
    return (
        <div>
            <label className={styles.switch}>
                <input type="checkbox"/>
                    <span className={`${styles.round} ${styles.slider}`}></span>
            </label>
        </div>
    )
}

export default SwitchButton;