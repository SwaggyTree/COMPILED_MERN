import { usePostsContext } from '../hooks/usePostsContext'


const PostDetails = ({ post }) => {
  const { dispatch } = usePostsContext()

  const handleClick = async () => {
    const response = await fetch('api/posts/' + post._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_POST', payload: json})

    }
  }

    return (
        <div className="post">
          <div className="post-header">
              <div className="post-header-title">
                <h2>{post.title}</h2>
                <span className="post-tag">{post.tag} </span>
              </div>
              <p className="posted-by-username">{post.user}</p>
          </div>
          <div className="post-content">
            <p>{post.body}</p>
          </div>
          <div className="post-actions">
            <button className="upvote-button"> <span className="vote-count" id="upvote-count">0</span></button>
            <button className="downvote-button"> <span className="vote-count" id="downvote-count">0</span></button>
            <button className="comment-button">Comment <span className="comment-count" id="comment-count">0</span></button>
            <span onClick={handleClick}>delete</span>
          </div>
        </div>
      
    )
  }
  
  export default PostDetails