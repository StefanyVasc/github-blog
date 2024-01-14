import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

/* ExternalLinkProps tem tudo que o ExternalLinkContainer pode conter e
e também tem as propriedades do objeto */
type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
  as?: string
  onClick?: () => void
}

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <S.ExternalLinkContainer {...rest}>
      {text}
      {/* se não houver um icon exibirá o da direita */}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </S.ExternalLinkContainer>
  )
}
