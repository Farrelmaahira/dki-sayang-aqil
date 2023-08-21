import {useState, useEffect} from 'react'

import axios from 'axios'

import Title from '../components/Title'

import { useNavigate } from 'react-router-dom'

const Post = () => {  
    const navigate = useNavigate()
    let counter = 1

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8000/api/posts').then(res => {
      console.log(res.data.data)
      setPosts(res.data.data)
    }).catch(e => {
      console.error(e.message)
    })
  }, [])

  const deleteButton = (id) => {
     axios.delete(`http://localhost:8000/api/post/${id}`).then(res => {
        console.log(res)
     }).catch(e => {
        console.error(e.message)
     })
  }

  const updateButton = (id) => {
    navigate(`/edit/${id}`)
  }
  
  return (
    <>
    <Title title={'Post'}/>
      <table border={1} cellSpacing={0} cellPadding={10}>
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Title
            </th>
            <th>
              Content
            </th>
            <th>
              Author
            </th>
            <th>
                Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(function(post, index){
              return (
                  <tr key={post.id}>
                    <td>
                      {counter++}
                    </td>
                    <td>
                      {post.title}
                    </td>
                    <td>
                      {post.content}
                    </td>
                    <td>
                      {post.author}
                    </td>
                    <td>
                        <button onClick={() => deleteButton(post.id)}>Delete</button>
                        <button onClick={()=> updateButton(post.id)}>Update</button>
                    </td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Post;