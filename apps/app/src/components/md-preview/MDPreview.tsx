import MDEditor from '@uiw/react-md-editor'
import { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import React from 'react'

interface MDPreviewProps extends MarkdownPreviewProps {
}

const MDPreview = (props: MDPreviewProps) => {
  return (
    <MDEditor.Markdown
      {...props}
    />
  )
}

export default MDPreview