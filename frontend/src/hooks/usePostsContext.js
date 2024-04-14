import { PostContext } from '../context/postcontext'
import { useContext } from 'react'

export const usePostsContext = () => {
    const context = useContext(PostContext)

    if(!context){
        throw Error('usePostsContext must be inside a PostsContextProvider')
    }
    return context
}