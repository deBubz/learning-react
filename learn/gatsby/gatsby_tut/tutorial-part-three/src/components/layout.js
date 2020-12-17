import React from "react";

import { Link } from "gatsby";

const LinkList = props => (
    <li style={{ display: "inline-block", margin: "1rem" }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout ({ children }) {
    return (
        <div style={{ 
            margin: `3rem auto`,
            maxWidth: 650,
            padding: `0 1rem` }}>
                <header>
                    <Link to="/" 
                    style={{ textShadow: "none", backgroundImage: "none" }}>
                        <h3>My sweet title</h3>
                    </Link>

                    <ul>
                        <LinkList to="/">Home</LinkList>
                        <LinkList to="/about/">About</LinkList>
                        <LinkList to="/contact/">Contact</LinkList>
                    </ul>
                </header>
                {children}
        </div>
    )
}