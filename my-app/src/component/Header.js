import React from 'react'
import '../css/main.css'
import {withRouter, Link} from 'react-router-dom'
function Header() {

    return (
        <>
            <header className="headerStyle">
            <ul className="headerList">
                <Link to='/home'>
                <li>
                    新增圖鑑項目
                </li>
                </Link>
                <Link to='/Illustrate'>
                <li>
                    圖鑑
                </li>
                </Link>
                <li>
                <Link to='/Illustrate'>
                    工具
                </Link>
                </li>
            </ul>
            </header>
        </>
    )
}
export default withRouter(Header)