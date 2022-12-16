import DynamicForm, { FIELD_TYPE, IField } from 'ui/common/dynamic-form'
import { Form } from 'antd'

function App() {
  const [form] = Form.useForm()

  const fields: IField[] = [
    {
      id: 'text',
      name: 'text',
      type: FIELD_TYPE.TEXT,
      formItemProps: {
        label: 'Text',
      },
      breakpoint: { xs: 24, md: 16 },
    },
    {
      id: 'password',
      name: 'password',
      type: FIELD_TYPE.PASSWORD,
      formItemProps: {
        label: 'Password',
      },
      breakpoint: { xs: 24, md: 8 },
    },
    {
      id: 'number',
      name: 'number',
      type: FIELD_TYPE.NUMBER,
      formItemProps: {
        label: 'Number',
      },
    },
    {
      id: 'select',
      name: 'select',
      type: FIELD_TYPE.SELECT,
      formItemProps: {
        label: 'Select',
      },
      inputProps: {
        options: [
          { value: '1', label: 'Fresher' },
          { value: '2', label: 'Junior' },
          { value: '3', label: 'Middle' },
          { value: '4', label: 'Senior' },
        ],
        mode: 'multiple',
      },
    },
    {
      id: 'checkbox',
      name: 'checkbox',
      type: FIELD_TYPE.CHECKBOX,
      formItemProps: {
        label: 'Checkbox',
      },
      inputProps: {
        options: [
          { value: '1', label: 'Fresher' },
          { value: '2', label: 'Junior' },
          { value: '3', label: 'Middle' },
          { value: '4', label: 'Senior' },
        ]
      },
      breakpoint: { xs: 24, md: 12 },
    },
    {
      id: 'radio',
      name: 'radio',
      type: FIELD_TYPE.RADIO,
      formItemProps: {
        label: 'Radio',
      },
      inputProps: {
        options: [
          { value: '1', label: 'Fresher' },
          { value: '2', label: 'Junior' },
          { value: '3', label: 'Middle' },
          { value: '4', label: 'Senior' },
        ]
      },
      breakpoint: { xs: 24, md: 12 },
    },
    {
      id: 'date',
      name: 'date',
      type: FIELD_TYPE.DATE,
      formItemProps: {
        label: 'Date picker',
      },
      inputProps: {
        format: 'DD/MM/YYYY',
      },
      breakpoint: { xs: 8 },
    },
    {
      id: 'time',
      name: 'time',
      type: FIELD_TYPE.TIME,
      formItemProps: {
        label: 'Time picker',
      },
      inputProps: {
        format: 'HH:mm',
      },
      breakpoint: { xs: 8 },
    },
    {
      id: 'upload',
      name: 'upload',
      type: FIELD_TYPE.FILE,
      formItemProps: {
        label: 'Upload file/image',
      },
    },
    {
      id: 'template',
      name: 'template',
      type: FIELD_TYPE.TEMPLATE,
      formItemProps: {
        label: 'Template',
      },
    },
    {
      id: 'group',
      name: 'group',
      type: FIELD_TYPE.GROUP,
      children: [
        {
          id: 'name',
          name: 'name',
          type: FIELD_TYPE.TEXT,
          formItemProps: {
            label: 'Name',
          },
        },
        {
          id: 'gender',
          name: 'gender',
          type: FIELD_TYPE.SELECT,
          formItemProps: {
            label: 'Gender',
          },
          inputProps: {
            options: [
              { value: '1', label: 'Male' },
              { value: '2', label: 'Female' },
            ]
          },
        },
      ],
      canModify: true,
    }
  ]

  return (
    <DynamicForm
      form={form}
      name='demo'
      fields={fields}
      onValuesChange={(changedValue, allValues) => console.log(allValues)}
    />
  )
}

export default App
