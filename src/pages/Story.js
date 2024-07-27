import styles from './Story.module.css'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ChapterContainer from '../components/layout/ChapterContainer'
import HeaderBreadcrumb from '../components/layout/HeaderBreadcrumb'
import StoryCard from '../components/StoryCard'

function Story() {
    const location = useLocation()
    const story_id = location.pathname.split('/').pop()
    const [story, setStory] = useState({})
    const [chapterList, setChapterList] = useState([{'content': ''}])
    const [category, setCategory] = useState({})
    const [fandom, setFandom] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/story/${story_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategory({'id': data.category_id, 'name': data.category_name})
                setFandom({'id': data.fandom_id, 'tag': data.fandom_tag})
                setStory(data)
                setChapterList(data.chapters)
            })
            .catch((err) => console.log(err))
    }, [story_id])


    return (
        <div className={styles.story_container}>
            <HeaderBreadcrumb category={{'id': category.id, 'name': category.name}} fandom={{'id': fandom.id, 'tag': fandom.tag}} />
            <StoryCard customClass='header_format' id={story.id}
                title={story.title}
                author_id={story.author_id}
                author_name={story.author_name}
                summary={story.summary}
                rating={story.rating}
                language={story.language}
                genre={story.language}
                chapter_count={story.chapter_count}
                word_count={story.word_count}
                review_count={story.review_count}
                favorite_count={story.favorite_count}
                follow_count={story.follow_count}
                created_at={story.created_at}
                updated_at={story.updated_at} />
            {chapterList.length > 0 && <ChapterContainer chapters={chapterList} />}
        </div>
    )
}

export default Story