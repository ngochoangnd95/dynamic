import MDEditor from '@uiw/react-md-editor'
import { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PluggableList } from 'unified'

interface MDPreviewProps extends MarkdownPreviewProps {
}

const MDPreview = (props: MDPreviewProps) => {
  return (
    <MDEditor.Markdown
      linkTarget={'_blank'}
      pluginsFilter={(type, plugin) => {
        let list: PluggableList = []
        if (type === 'rehype') {
          list = [...plugin]
          list.splice(1, 1)
        }
        return list
      }}
      components={{
        code(_props) {
          const { inline, className, children, ...rest } = _props
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              // showLineNumbers
              customStyle={{ borderRadius: 5 }}
              style={vscDarkPlus}
              children={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code className={className} {...rest}>
              {children}
            </code>
          )
        }
      }}
      {...props}
    />
  )
}

export default MDPreview