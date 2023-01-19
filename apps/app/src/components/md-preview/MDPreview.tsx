import MDEditor from '@uiw/react-md-editor'
import { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PluggableList } from 'unified'
import { Components } from 'react-markdown'
import { JsonParse } from '@/utils'
import { DATA_META, META_TYPE } from './constant'

interface MDPreviewProps extends MarkdownPreviewProps {
  codeDemoComponents?: {
    [key: string]: React.ReactNode
  }
}

const CUSTOM_STYLE: React.CSSProperties = {
  borderRadius: 5,
  margin: 0,
}

const MDPreview = (props: MDPreviewProps) => {
  const { codeDemoComponents, ...rest } = props
  const components: Components = {
    code(_props) {
      const { inline, className, children, node, ...rest } = _props
      const match = /language-(\w+)/.exec(className || '')
      if (!inline && match) {
        const syntaxHighlighter = (
          <SyntaxHighlighter
            language={match[1]}
            PreTag='div'
            // showLineNumbers
            customStyle={CUSTOM_STYLE}
            style={vscDarkPlus}
            children={String(children).replace(/\n$/, '')}
          />
        )

        const meta: DATA_META = JsonParse(node.properties?.dataMeta)
        if (meta?.type == META_TYPE.CODE_DEMO) {
          const component = meta.blockName ? codeDemoComponents?.[meta.blockName] : undefined
          return (
            <div className='flex flex-col'>
              <div>{component}</div>
              <div>{syntaxHighlighter}</div>
            </div>
          )
        }

        return <>{syntaxHighlighter}</>
      }

      return (
        <code className={className} {...rest}>
          {children}
        </code>
      )
    }
  }

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
      components={components}
      {...rest}
    />
  )
}

export default MDPreview