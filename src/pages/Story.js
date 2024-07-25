import styles from './Story.module.css'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderBreadcrumb from '../components/layout/HeaderBreadcrumb'
import StoryCard from '../components/StoryCard'

function Story() {
    const location = useLocation()
    //const story_id = location.pathname.split('/').pop()
    const [story, setStory] = useState({})
    const [chapterList, setChapterList] = useState([])
    const [categoryId, setCategoryId] = useState('-')
    const [fandomTag, setFandomTag] = useState('-')
    // breadcrumbs[{fragment:'', text:''}]
    // const [breadcrumbs, setBreadcrumbs] = useState([])
    // let makeCrumbs = (arr) => {
    //     let crumbs = []
    //     console.log(story.category_id)
    //     arr.map((item) => console.log({ 'fragment': item.split('-')[0], 'text': item.split('-')[1] }))
    //     arr.map((item) => crumbs.push({ 'fragment': item.split('-')[0], 'text': item.split('-')[1] }))
    //     return crumbs
    // }

    useEffect(() => {
        fetch(`http://localhost:5000/story/${location.pathname.split('/').pop()}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategoryId(data.category_id)
                setFandomTag(data.fandom_tag)
                setStory(data)
                setChapterList(data.chapters)
                //setBreadcrumbs(makeCrumbs([story.category_id, story.fandom_tag]))  
            })
            .catch((err) => console.log(err))
    }, [location])


    return (
    <div className={styles.story_container}>
        <div>
            <HeaderBreadcrumb category_id={categoryId} fandom_tag={fandomTag}/>
        </div>
        <StoryCard customClass='header_format' id={story.id}
            title={story.title}
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
        {chapterList.map((chapter) => (
            <div>
                <h4>{chapter.title}</h4>
                <p>{chapter.content}</p>
                <p>{chapter.content}</p>
                <p>{chapter.content}</p>
            </div>
        ))}

    </div>)
}

export default Story