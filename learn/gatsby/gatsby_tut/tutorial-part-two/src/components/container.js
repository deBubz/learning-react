import React from 'react'
import containerStyles from './container.module.css'

export default function Container(props) {
    const { children } = props;

    return (
        <div className={containerStyles.container}>
            {children}
        </div>
    )
}