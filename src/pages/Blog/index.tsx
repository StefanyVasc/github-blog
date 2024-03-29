import { useCallback, useEffect, useState } from 'react'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import * as S from './styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export interface PostType {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  labels_url: string
  comments: string
  url: {
    login: string
  }
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:${username}/${reponame}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <S.PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </S.PostsListContainer>
      )}
    </>
  )
}
