import CreatePostList from "./Posts/CreatePostList";

import React, {useState} from "react";
import PostForm from "./UI/PostForm";

export default function App() {
    const [posts, setPosts] = useState([
            {tech: 'JavaScript', description: 'qweqwe1'},
            {tech: 'JavaScript', description: 'qweqwe2'},
            {tech: 'JavaScript', description: 'qweqwe3'},
            {tech: 'JavaScript', description: 'qweqwe4'},
        ]),
        createPost = (newPost) => {
            setPosts([...posts, newPost])
        },
        removePost = (number) => {
            setPosts(posts.filter(index => index !== posts[number - 1]))
        }
    return (
        <div>
            <PostForm create={createPost}/>
            {posts.length == 0
                ?<h1>Постов не найдено</h1>
                : <CreatePostList del={removePost} list={posts} title='Список постов 1'/>
            }
        </div>
    )
}