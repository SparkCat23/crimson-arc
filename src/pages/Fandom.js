import styles from './Fandom.module.css'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import StoryCard from '../components/StoryCard'

function Fandom(){
    const location = useLocation()
    const category_id = location.state.category_id
    const fandom_id = location.pathname.split('/').pop()

    const [workList, setWorkList] = useState([])
    const [category, setCategory] = useState({})
    const [fandom, setFandom] = useState({})

    useEffect(() =>{
        fetch(`http://localhost:5000/categories/${category_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'} 
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategory(data)
            if (data.fandoms.length === 0)
                return
            setFandom(data.fandoms.find((f) => f.id == fandom_id))
            if (data.fandoms.find((f) => f.id == fandom_id).works.length === 0)
                return
            setWorkList(data.fandoms.find((f) => f.id == fandom_id).works)
        })
        .catch((err) => console.log(err))
    },[category_id, fandom_id])

    return (
        <div className={styles.fandom_container}>
            <p className={styles.fandom_link}><Link to={`/category/${category_id}`}>{category.name}</Link> &gt; {fandom.name}</p>
            <div>{workList.length > 0 && workList.map((story) => (
                <StoryCard {...story}/>
            ))}
            {workList.length === 0 && <p>No stories published yet. You can start here!</p>}
            </div>
        </div>
    )
}

export default Fandom