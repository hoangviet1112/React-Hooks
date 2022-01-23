import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToShop] = useState(false)

    const tabs = ['posts', 'comments', 'albums']  

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
        })  
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToShop(true)
            } else {
                setShowGoToShop(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        console.log('Add Event');

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('Remove Event');
        }
    }, [])
    
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
            {
                posts.map(post => {
                    return (
                        <li key={post.id}>
                            {post.title || post.body}
                        </li>
                    )
                })
            }
            {
                showGoToTop && (
                    <button style={{
                        position: 'fixed',
                        border: 20,
                        right: 20
                    }}>
                        Go To Top
                    </button>
                )
            }
        </div>
    )
}

export default UseEffectHook
