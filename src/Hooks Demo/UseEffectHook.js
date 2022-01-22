import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

const UseEffectHook = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
        })  
    }, [type])

    const tabs = ['posts', 'comments', 'albums']
    
    
    
    return (
        <div>
            {
                tabs.map(tab => {
                    return (
                        <button 
                            key={tab} 
                            onClick={() => setType(tab)}
                            style={type === tab ? {
                                color: 'fff',
                                backgroundColor: '#333'
                            } : {}}
                        >
                            {tab}
                        </button>
                    )
                })
            }
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>
                                {post.title || post.body}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UseEffectHook
