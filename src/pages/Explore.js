import { useEffect, useState } from "react"

import styles from './Explore.module.css'

import CategoryCard from "../components/CategoryCard"

function Explore() {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div className={styles.explore_container}>
            <h1>Choose your fandom</h1>
            <div className={styles.explore_list}>
                {categories.length > 0 && categories.map((category) => (<CategoryCard category={category}/>))}
                {categories.length === 0 && <p>No categories listed.</p>}
            </div>
        </div>
    )
}

export default Explore