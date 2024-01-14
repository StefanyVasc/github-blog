import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import * as S from './styles'

export function Profile() {
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src="https://avatars.githubusercontent.com/u/39599492?v=4" />
      <S.ProfileDetails>
        <header>
          <h1>Stefany Sá</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>Frontend & UI Developer.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            StefanyVasc
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Enterprise
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            100 seguidores
          </li>
        </ul>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
