import styles from './StoryCard.module.css'

import logo from '../logo.svg'

import { Link } from 'react-router-dom'

function StoryCard({customClass, id, title, author_id, author_name, fandom_tag, summary, rating, language, genre, chapter_count, word_count, review_count, favorite_count, follow_count, created_at,updated_at}) {
    return (
        <div className={`${styles.story_card} ${styles[customClass]}`}>
            <div className={styles.story_card_image}>
                <img src={logo} />
            </div>
            <div className={styles.story_card_info}>
                <p className={styles.story_card_title}>
                    <Link to={`/story/${id}`}>{title}</Link>{author_name !== '' && <> by <Link to={`/author/${author_id}`}>{author_name}</Link></>}
                </p>
                <p>{summary}{summary}{summary}</p>
                <p>{fandom_tag && <>{fandom_tag} | </>}Rated: {rating} | {language} | Genre: {genre} | Chapters: {chapter_count} | Word count: {word_count}</p>
                <div className={styles.story_card_stats}>
                    <Link to={`/story/${id}/reviews`}>Reviews: {review_count}</Link>
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