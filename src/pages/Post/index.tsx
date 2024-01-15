import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostType } from '../Blog'
import { PostHeader } from './components/PostHeader'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<PostType>({} as PostType)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`,
      )
      console.log(response)
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      {console.log(postData)}
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
