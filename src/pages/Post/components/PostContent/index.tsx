import { ReactNode, ReactElement, FunctionComponent } from 'react'
import * as S from './styles'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PostContentProps {
  content: string
}

interface CodeProps {
  inline?: boolean
  className?: string
  children?: ReactNode
}

const Code: FunctionComponent<CodeProps> = ({
  inline,
  className,
  children,
}: CodeProps): ReactElement => {
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : undefined

  const contentString = String(children || '')

  return !inline && language ? (
    <SyntaxHighlighter style={dracula} language={language} PreTag="div">
      {contentString.replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code
      style={{ whiteSpace: inline ? 'pre-wrap' : 'pre' }}
      className={className}
    >
      {contentString}
    </code>
  )
}

const components: Record<string, FunctionComponent<CodeProps>> = {
  code: Code,
}

export function PostContent({ content }: PostContentProps) {
  return (
    <S.PostContentContainer>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </S.PostContentContainer>
  )
}
