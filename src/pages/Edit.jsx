import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../components/Title";
const Edit = () => {
    const id = useParams().id
    const [data, setData] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('') 

    const body = {
        title,
        content, 
        author
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(body)
        // axios.put(`http://localhost:8000/api/post/${id}`, body).then(res => {
        //     console.log(res)
        // }).catch(e => {
        //     console.error(e.message)
        // })
    }

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/post/${id}`).then(res => {
            console.log(res.data.data[0])
            setData(res.data.data[0])
        }).catch(e => {
            console.error(e.message)
        })

    }, [])

    return (
        <>
            <Title title={'Edit'}/> 
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={data.title} onChange={e => { setTitle(e.target.value) }} />
            <label htmlFor="content">Content</label>
            <input type="text" name="content" value={data.content} onChange={e => {setContent(e.target.value)}} />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" value={data.author} onChange={e => {setAuthor(e.target.value)}}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Edit;