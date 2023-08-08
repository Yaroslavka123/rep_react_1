import React from 'react';
import Post from "./Post";

const CreatePostList = ({del, ...props}) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.list.map((index, number) => {
                return <Post del={del} number={number + 1} item={index}/>
            })}
        </div>
    );
};
export default CreatePostList;