import styles from './StoryCard.module.css'

import logo from '../logo.svg'

function StoryCard(props) {
    return (
        <div className={styles.story_card}>
            <div className={styles.story_card_image}>
                <img src={logo} />
            </div>
            <div className={styles.story_card_info}>
                <p className={styles.story_card_title}><span>{props.title}</span> by {props.author_name}</p>
                <p>{props.summary}{props.summary}{props.summary}</p>
                <p>Rated: {props.rating} | {props.language} | Genre: {props.genre} | Chapters: {props.chapter_count} | Word count: {props.word_count}</p>
                <div className={styles.story_card_stats}>
                    <a href='#'>Reviews: {props.review_count}</a>
                    <span>Favorites: {props.favorite_count}</span>
                    <span>Following: {props.follow_count}</span>
                    <span>Updated: {props.created_at}</span>
                    <span>Published: {props.updated_at}</span>
                </div>
            </div>
        </div>
    )
}

export default StoryCard