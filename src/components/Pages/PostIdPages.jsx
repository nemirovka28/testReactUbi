import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { useFetching } from "../../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async () =>{
        const response = await PostService.getByID(params.id)
        setPost(response.data)
    });

    const [fetchComents, isComLoading, comError] = useFetching( async () =>{
        const response = await PostService.getCommentByPostID(params.id)
        setComments(response.data)
    });

    useEffect(()=>{
        fetchPostById(params.id);
        fetchComents(params.id);
    },[]);

    return (
            <div>
                <h1>Вы oткрыли страницу поста с ID:{params.id}</h1>
                {isLoading 
                 ?<Loader/>
                 :<div>{post.id}. {post.title}</div>
                 }
                 <h2>Комментарии</h2>
                 {isLoading 
                 ?<Loader/>
                 :<div>
                    {comments.map ( comm => 
                        <div 
                        key={comm.id}
                        style ={{marginTop:10}}>
                            <h3>{comm.email}</h3>
                            <p>{comm.body}</p>
                        </div>
                    )}
                 </div>
                 }
            </div>
    )
}

export default PostIdPage;