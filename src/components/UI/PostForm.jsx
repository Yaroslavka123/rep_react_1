import React, {useState} from 'react';
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

const PostForm = ({create}) => {

    const
        [tech,setTech] = useState(''),
        [description,setDescript] = useState('')
    function addNewPost(event){
        event.preventDefault()
        const newPost={tech, description}
        setTech('')
        setDescript('')
        create(newPost);
    }
    return (
        <div>
            <form action="">
                <MyInput
                    value = {tech}
                    onChange = {event => setTech(event.target.value)}
                    placeholder='Text'
                    type="text"/>
                <MyInput
                    value = {description}
                    onChange = {event => setDescript(event.target.value)}
                    placeholder='Text'
                    type="text"/>
                <MyButton onClick={addNewPost}>Send</MyButton>
            </form>

        </div>
    );
};

export default PostForm;