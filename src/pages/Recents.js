import { useEffect, useState } from "react"

import StoryCard from "../components/StoryCard"

function Recents() {
    const [stories, setStories] = useState([])
    let today = new Date().getDate()

    useEffect(()=>{
        fetch('http://localhost:5000/story', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then((resp) => resp.json())
        .then((data) => {
            setStories(data.filter((story) => new Date(story.updated_at.replace(/_/,'T')).getDate() >= today))
        })
        .catch((err) => console.log(err))
    })
    return(
    <div>
        {stories.length > 0 && stories.map((story) => (<StoryCard {...story}/>))}
    </div>
    )
}

export default Recents