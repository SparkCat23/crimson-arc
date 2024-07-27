import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Category.module.css'

function Category() {
    const [category, setCategory] = useState({})
    const [fandoms, setFandoms] = useState([])
    const location = useLocation()
    const category_id = location.pathname.split('/').pop()

    useEffect(() => {

        fetch(`http://localhost:5000/categories/${category_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategory(data)
                setFandoms(data.fandoms)
            })
            .catch((err) => console.log(err))
    }, [category_id])

    return (
        <div>
            <h2>{category.name}</h2>
            <div>
                <ul>
                    {fandoms.length > 0 && fandoms.map((fandom) => (
                        <li><Link to={`/category/${category.id}/fandom/${fandom.id}`}>{`${fandom.name} (${fandom.work_count})`}</Link></li>
                    ))}
                    {fandoms.length === 0 && <p>This category is empty. <a href='/'>Start by publishing your story!</a></p>}
                </ul>
            </div>
        </div>
    )
}

export default Category