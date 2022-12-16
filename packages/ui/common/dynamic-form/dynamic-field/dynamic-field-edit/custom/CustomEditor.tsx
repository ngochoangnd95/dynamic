import React from "react"
import MDEditor, { commands, ContextStore } from '@uiw/react-md-editor'
import { AiOutlineAlignCenter } from 'react-icons/ai'

interface CustomEditorProps {
  value: string
  onChange: (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void
}

const CustomEditor = (props: CustomEditorProps) => {

  return (
    <div data-color-mode='light'>
      <MDEditor
        value={props.value}
        onChange={props.onChange}
        commands={[
          commands.bold,
          commands.italic,
          commands.group([
            commands.title1,
            commands.title2,
            commands.title3,
            commands.title4,
            commands.title5,
            commands.title6,
          ], {
            name: 'title',
            groupName: 'Title',
            buttonProps: { 'title': 'Insert title' }
          }),
          commands.divider,
          commands.link,
          commands.quote,
          commands.code,
          commands.codeBlock,
          commands.image,
          commands.divider,
          commands.unorderedListCommand,
          commands.orderedListCommand,
          commands.checkedListCommand,
          commands.divider,
          {
            name: 'Centering',
            keyCommand: 'center',
            buttonProps: { 'title': 'Centering a paragraph' },
            icon: <AiOutlineAlignCenter />,
            execute: (state, api) => {
              let modifyText = `<center>\n${state.selectedText}\n</center>`
              api.replaceSelection(modifyText)
            }
          }
        ]}
      />
    </div>
  )
}

export default CustomEditor