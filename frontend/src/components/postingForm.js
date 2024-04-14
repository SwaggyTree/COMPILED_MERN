import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'

const PostingForm = () => {
    const{ dispatch } = usePostsContext()
    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [tag, setTag] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)

    const formSubmit = async (e) => {
        e.preventDefault()

        const post = {title, user, tag, body}

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setUser('')
            setTag('')
            setBody('')
            setError(null)
            console.log('new post added.', json)
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }

    return(
        <form className='create' onSubmit={formSubmit}>
            <h3>Add a new Post</h3>
            
            <label>Title: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
              
            <label>User: </label>
            <input 
                type="text"
                onChange={(e) => setUser(e.target.value)}
                value={user}
            />
            
            <label>Tag: </label>
            <input 
                type="text"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
            />

            <label>Body: </label>
            <input 
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body}
            />

            <button> add post </button>
            
            {error && <div className="error">All fields need to be filled.</div>}
        </form>


    )
}


export default PostingForm