import styles from './HeaderBreadcrumb.module.css'
import { Link } from 'react-router-dom'

// props:
// breadcrumbs[{fragment:'', text:''}]
// current_page: ''
function HeaderBreadcrumb({category_id, fandom_tag, current_page}){
    let category = category_id.split('-')
    console.log(category_id.split('-')[0])
    let fandom = fandom_tag.split('-')
    const [category_code, category_name] = [category[0], category[1]]
    const [fandom_code, fandom_name] = [fandom[0], fandom[1]]

    return(
    <div>
        <Link to={category_code}>{category_name}</Link>&gt;
        <Link to={fandom_code}>{fandom_name}</Link>
        {current_page && <>&gt;<span>{current_page}</span></>}
    </div>
    )
}

export default HeaderBreadcrumb