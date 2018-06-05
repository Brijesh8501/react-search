import React from 'react';
import Item from './news';

const News = (props)=>
{
    const eachItem =props.news.map((item)=>
    {

        return (
            <Item item = {item} key={item.id}/>
        )
    }
    )

    return (
        <div>
            <h1>{props.children}</h1>

            {eachItem}
        </div>
    )

}
export default News;
