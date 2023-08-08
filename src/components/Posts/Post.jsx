import React from 'react';
import PostCSS from './post.module.css';

const Post = ({del, ...props}) => {

    return (
        <div className={PostCSS.item}>
            <div>
                <h2>{`${props.number}. ${props.item.tech}`}</h2>
                <p>{props.item.description}</p>
            </div>
            <button onClick={() => del(props.number)}>Delete</button>
        </div>
    );
};

export default Post;