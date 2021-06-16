import { UsersOfSearchType } from '../../redux/usersReducer';
import profileLogo from '../../assets/images/profileLogo.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';

type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export function Paginator(props: PaginatorType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {pages.map(p => {
            return <span
                className={props.currentPage === p ? style.selected : style.paginat}
                onClick={() => props.onPageChanged(p)}
            >{p}</span>
        })}

    </div>)
}







