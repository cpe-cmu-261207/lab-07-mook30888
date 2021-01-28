import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '601283cc4cde3366367a4acd';

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetchTodo = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}`, { headers: { 'app-id': APP_ID } })
            const res = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
            setPost(response.data)
            setComment(res.data.data)
            //console.log(res.data.data)
            //console.log(response.data)
        }
    }
    useEffect(fetchTodo,[postId])
    return(
        <>
            {post !== null ? (
                <div style={{padding:20}}>
                    <h2>{post.text}</h2>
                    <p>{[...post.tags].toString()}</p>
                    <img src={post.image} />
                    <p>{post.owner.firstName} {post.owner.lastName}</p>
                    <p>Likes : {post.likes}</p>
                    <h2>Comments</h2>
                    <ul>
                        {
                            comment.map(e => {
                                return (
                                    <li>
                                        <p>{e.owner.firstName} {e.owner.lastName} : {e.message}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div> 
            ):null}
            <Link href="/post">
                Back
            </Link>
        </>
    )
}

export  default  Post

