import styles from './Container.module.css'

function Container({customClass, children}){
    let custom_class = ''
    if (customClass !== '') { custom_class = `${styles[customClass]}` }
    return <div className={`${styles.container} ${custom_class}`}>{children}</div>
}

export default Container