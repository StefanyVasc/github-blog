import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps } from 'react'
import { ExternalLinkContainer } from './styles'

/* ExternalLinkProps tem tudo que o ExternalLinkContainer pode conter e
e também tem as propriedades do objeto */
type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
