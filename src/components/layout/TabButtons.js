import styles from './TabButtons.module.css'

function TabButtons({tab_info = [], handleOnClick}) {

    return (
    <div className={styles.tab_buttons}>
        {tab_info.length > 0 && tab_info.map((item, index) =>(
            <button key={index} onClick={handleOnClick(index)}>{item}</button>
        ))}
    </div>
    )
}

export default TabButtons