import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const PostComponent = () => {
    const [posts,setPosts] =useState({});
    const [id,setId] = useState(0);
    const [buttonClickedId,setButtonClickedId] = useState(0);
    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickedId}`)
        .then((res)=> setPosts(res.data))
        .catch(err=> console.log(err))
    },[buttonClickedId]);

    const handleClick = () => {
        setButtonClickedId(id);
        console.log('Button Clicked Id:' , buttonClickedId)
    }

  return (
    <div>
            <div>
                <button type='button' value={id}
                onClick={handleClick}>Fetch a Post</button>
                <input type="text" onChange={e => setId(e.target.value)} />
                <h1>{posts.title}</h1>
            </div>
             {/* <ul>
                {
                     posts.map(p => (
                     <li key={p.id}>{p.id} : {p.title}</li>
                  ))
                }
             </ul> */}
        
    </div>
  )
}
