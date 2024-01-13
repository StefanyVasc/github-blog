import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://avatars.githubusercontent.com/u/39599492?v=4" />
      <ProfileDetails>
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
      </ProfileDetails>
    </ProfileContainer>
  )
}
