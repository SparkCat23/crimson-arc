import logo from '../logo.svg'
import styles from './Author.module.css'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import StoryCard from "../components/StoryCard"

function Author() {
    const location = useLocation()
    const authorId = location.pathname.split('/').pop()
    const [author, setAuthor] = useState({})
    const [stories, setStories] = useState([])

    const [activeTab, setActiveTab] = useState(0)
    const tab_info = ['My Archive', 'Favorites', 'Follows']

    useEffect(() => {
        fetch(`http://localhost:5000/author/${authorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => setAuthor(data))
            .catch((err) => console.log(err))

        fetch(`http://localhost:5000/story?author_id=${authorId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => setStories(data))
            .catch((err) => console.log(err))
    }, [authorId])

    return (
        <div className={styles.author_container}>
            <div className={styles.author_card}>
                <div className={styles.author_image}><img src={logo} /></div>
                <div>
                    <h3>{author.author_name}</h3>
                    <p>{author.created_at}</p>
                    <p>{author.author_bio}</p>
                </div>
            </div>
            <div>
                <div className={styles.tab_buttons}>
                    {tab_info.map((item, index) => (
                        <button key={index} onClick={() => setActiveTab(index)}>{item}</button>
                    ))}
                </div>
                {activeTab === 0 && stories.map((story) => (
                    <StoryCard id={story.id} key={story.id}
                        title={story.title}
                        fandom={story.fandom_tag}
                        summary={story.summary}
                        rating={story.rating}
                        language={story.language}
                        genre={story.genre}
                        chapter_count={story.chapter_count}
                        review_count={story.review_count}
                        word_count={story.word_count}
                        favorite_count={story.favorite_count}
                        follow_count={story.follow_count}
                        created_at={story.created_at}
                        updated_at={story.updated_at}
                    />
                ))}
                {activeTab === 1 &&
                    <div>
                        <p>Favorites</p>
                    </div>}
                {activeTab === 2 &&
                    <div>
                        <p>Follows</p>
                    </div>}
            </div>
        </div>)
}

export default Author