import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps } from 'react'
import * as S from './styles'

/* ExternalLinkProps tem tudo que o ExternalLinkContainer pode conter e
e também tem as propriedades do objeto */
type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <S.ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </S.ExternalLinkContainer>
  )
}
