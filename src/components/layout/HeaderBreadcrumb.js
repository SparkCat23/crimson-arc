import styles from './HeaderBreadcrumb.module.css'
import { Link } from 'react-router-dom'

// props:
// category: {id: "HX16", name: "text"}
// fandom: {id: "HX16", name: "text"}
// current_page: "text"
function HeaderBreadcrumb({category, fandom, current_page}){
    return(
    <div>
        {category && <>&gt;<Link to={`/category/${category.id}`}>{category.name}</Link></>}
        {fandom && <>&gt;<Link to={`/category/${category.id}/fandom/${fandom.id}`}>{fandom.tag}</Link></>}
        {current_page && <>&gt;<span>{current_page}</span></>}
    </div>
    )
}

export default HeaderBreadcrumb