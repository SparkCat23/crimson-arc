import styles from './Fandom.module.css'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
            if (data.fandoms.length === 0)
                return
            if (data.fandoms[fandom_id].works.length === 0)
                return
            setCategory(data)
            setFandom(data.fandoms[fandom_id])
            setWorkList(data.fandoms[fandom_id].works)
        })
        .catch((err) => console.log(err))
    },[category_id, fandom_id])

    return (
        <div className={styles.fandom_container}>
            <h4>{category.name} &gt; {fandom.name}</h4>
            <div>{workList.length > 0 && workList.map((story) => (
                <StoryCard {...story}/>
            ))}
            {workList.length === 0 && <p>No stories published yet. You can start here!</p>}
            </div>
        </div>
    )
}

export default Fandom