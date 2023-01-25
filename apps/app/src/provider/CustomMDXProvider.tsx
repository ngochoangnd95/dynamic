import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CustomMDXProvider = (props: any) => {
  const components: MDXComponents = {
    code: (props) => {
      const { className, children } = props
      const match = /language-(\w+)/.exec(className || '')
      if (match?.[1]) {
        return (
          <SyntaxHighlighter
            language={match?.[1] || 'text'}
            PreTag='div'
            style={vscDarkPlus}
            children={String(children).replace(/\n$/, '')}
          />
        )
      }
      return (
        <code>{children}</code>
      )
    }
  }

  return (
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  )
}

export default CustomMDXProvider