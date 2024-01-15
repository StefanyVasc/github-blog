import { ReactNode, ReactElement, FunctionComponent } from 'react'
import * as S from './styles'
import ReactMarkdown, { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PostContentProps {
  content: string
}

interface CodeProps {
  inline: boolean
  className: string
  children: ReactNode
}

const Code: FunctionComponent<CodeProps> = ({
  inline,
  className,
  children,
}: CodeProps): ReactElement => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code
      style={{ whiteSpace: inline ? 'pre-wrap' : 'pre' }}
      className={className}
    >
      {children}
    </code>
  )
}

const components: Components = {
  code: Code as FunctionComponent<CodeProps>,
}

export function PostContent({ content }: PostContentProps) {
  return (
    <S.PostContentContainer>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </S.PostContentContainer>
  )
}
