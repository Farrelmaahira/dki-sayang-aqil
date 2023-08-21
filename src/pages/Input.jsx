import { useState, useEffect,  } from "react";

import axios from "axios";

import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
const Input = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const body = {
        title,
        content, 
        author
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/post', body).then(res => {
            console.log(res)
            navigate('/post')
        }).catch(e => { console.error(e.message)})
    }

    return (
        <>
        <Title title={'Input'} />
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={title} onChange={e => { setTitle(e.target.value) }} />
            <label htmlFor="content">Content</label>
            <input type="text" name="content" value={content} onChange={e => {setContent(e.target.value)}} />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" value={author} onChange={e => {setAuthor(e.target.value)}}/>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default Input;
