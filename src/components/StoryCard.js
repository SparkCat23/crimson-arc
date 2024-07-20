import styles from './StoryCard.module.css'

import logo from '../logo.svg'

import { Link } from 'react-router-dom'

function StoryCard({customClass, id, title, author_name, summary, rating, language, genre, chapter_count, word_count, review_count, favorite_count, follow_count, created_at,updated_at}) {
    return (
        <div className={`${styles.story_card} ${styles[customClass]}`}>
            <div className={styles.story_card_image}>
                <img src={logo} />
            </div>
            <div className={styles.story_card_info}>
                <p className={styles.story_card_title}><Link to={`/story/${id}`}>{title}</Link> by <Link to='#'>{author_name}</Link></p>
                <p>{summary}{summary}{summary}</p>
                <p>Rated: {rating} | {language} | Genre: {genre} | Chapters: {chapter_count} | Word count: {word_count}</p>
                <div className={styles.story_card_stats}>
                    <a href='#'>Reviews: {review_count}</a>
                    <span>Favorites: {favorite_count}</span>
                    <span>Following: {follow_count}</span>
                    <span>Updated: {created_at}</span>
                    <span>Published: {updated_at}</span>
                </div>
            </div>
        </div>
    )
}

export default StoryCard