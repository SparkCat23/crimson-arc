import logo from '../logo.svg'
import styles from './ReviewCard.module.css'

function ReviewCard({id, chapter_id, author_name, review_date, content}){
    
    return(
    <div className={styles.review_card}>
        <div className={styles.review_card_image}>
            <img src={logo} />
        </div>
        <div>
            <div className={styles.review_card_header}>
                <a href='#'>{author_name}</a>
                <span>Chapter: {chapter_id} |</span>
                <span>{review_date}</span>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    </div>
    )
}

export default ReviewCard