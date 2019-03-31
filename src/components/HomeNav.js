import React from 'react'
import Link from 'gatsby-link'
import githubLogo from '../img/github-icon-white.svg'
import youtubeLogo from '../img/youtube-logo.svg'

const HomeNav = ( { isHome } ) => 
    <nav className="site-nav">
        <div className="site-nav-left">
            <ul className="nav" role="menu">
                <li role="menuitem">
                    <Link to="/">
                        Trang chủ
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/about">
                        Giới thiệu
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/tags">
                        Trích dẫn
                    </Link>
                </li>
            </ul>
        </div>
        <div className="site-nav-right">
            <a className="social-logo" href="http://thaoam.com" >
                <img src={ youtubeLogo } alt="thaoam logo" />
            </a>
            <a className="social-logo" href="http://bakadono.com" >
                <img src={ githubLogo } alt="baka logo" />
            </a>
        </div>
    </nav>

export default HomeNav