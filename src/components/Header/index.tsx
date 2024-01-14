import * as S from './styles'
import logoSrc from '../../assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoSrc} alt="" />
    </S.HeaderContainer>
  )
}
