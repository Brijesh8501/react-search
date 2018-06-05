import React from 'react'

const Item = (props) =>
{
    return (
        <div>
            <h1>{props.item.title}</h1>
            <p>{props.item.feed}</p>
        </div>
    )
}

export default Item