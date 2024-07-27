import styles from './CategoryCard.module.css'

import {Link} from 'react-router-dom'

function CategoryCard({category}){
    return (
    <div className={styles.category_card}>
        <Link to={`/category/${category.id}`} className={styles.category_link}>{category.name.toUpperCase()}</Link>
        <ul className={styles.category_fandom_list}>
            {category.fandoms.map((fandom) => (
            <li><Link to={`/category/${category.id}/fandom/${fandom.id}`}>{`${fandom.name} (${fandom.work_count})`}</Link></li>
            ))}
        </ul>
    </div>
    )
}

export default CategoryCard