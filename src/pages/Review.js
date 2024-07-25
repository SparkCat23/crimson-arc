import styles from './Review.module.css'

import ReviewCard from '../components/ReviewCard'

import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Review() {
    const location = useLocation()
    const story_id = location.pathname.split('/')[2]
    const [story, setStory] = useState({})
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/story/${story_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setStory(data)
            setReviews(data.reviews)
        })
        .catch((err) => console.log(err))
    }, [story_id])


    return (
        <div className={styles.review_container}>
            <div className={styles.review_list_header}>
                <p>Reviews for <Link to={`/story/${story_id}`}>{story.title}</Link></p>
            </div>
            <div className={styles.review_list}>
                {reviews.length > 0 && reviews.map((review) => (
                    <ReviewCard id={review.id}
                     chapter_id={review.chapter_id}
                     author_name={review.author_name} 
                     review_date={review.review_date} 
                     content={review.content} />
                ))}
                {reviews.length === 0 && <p>No reviews yet!</p>}
            </div>
        </div>
    )
}

export default Review