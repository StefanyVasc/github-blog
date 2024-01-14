import { PostType } from '../..'
import * as S from './styles'
import { relativeDateFormatter } from '../../../../utils/utils.formatter'

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <S.PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </S.PostContainer>
  )
}
