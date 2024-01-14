import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'

// interface PostHeaderProps {
//   postData: IPost
//   isLoading: boolean
// }

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    // o -1 volta uma rota
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <>
        <header>
          <ExternalLink
            as="button"
            onClick={goBack}
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Voltar"
            variant="iconLeft"
          />
          <ExternalLink text="Ver no Github" href="#" target="_blank" />
        </header>

        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            StefanyVasc
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            Há 2 dias
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />4 comentários
          </li>
        </ul>
      </>
    </PostHeaderContainer>
  )
}
