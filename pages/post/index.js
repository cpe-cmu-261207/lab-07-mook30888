import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '601283cc4cde3366367a4acd';

const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetch = async () => {
        const response = await axios.get(`${baseURL}/post` , { headers: { 'app-id': APP_ID } })
        console.log(response.data)
        setPosts(response.data.data)

    }

    useEffect(fetch,[])
    return (
        <>
            <h1>All Todos from jsonplaceholder</h1>

                <ul>
                    {
                        posts.map(todo => (
                            
                            
                                <li>
                                    <p>{todo.text}</p>
                                    <img src= {todo.image}></img>
                                    <p>likes: {todo.likes}</p>
                                    <Link  key={todo.id} href={`/post/${todo.id}`}>
                                    <button style={{margin:10}}>see more</button>
                                    </Link>
                                </li>
                            

                        ))
                    }
                </ul>


        </>
    )
}

export default  Posts
