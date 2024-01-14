import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import * as S from './styles'

export function Blog() {
  return (
    <div>
      <Profile />
      <SearchInput />
      <S.PostsListContainer>
        <Post />
      </S.PostsListContainer>
    </div>
  )
}
