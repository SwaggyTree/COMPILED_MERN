import { useEffect }from 'react'
import { usePostsContext } from '../hooks/usePostsContext'

import PostDetails from "../components/postDetails"
import PostingForm from '../components/postingForm'


const Home = () => {
   const {posts, dispatch} = usePostsContext()

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch ('/api/posts')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_POSTS', payload: json})
            }
        }

        fetchPosts()
    }, [])

    return(
        <div className="posts-container">
            <div className="workouts">
                {posts && posts.map((post)=> (
                    <PostDetails key={post._id} post={post}/>
                ))}
            </div>
            <PostingForm/>
        </div>
    )
}

export default Home