import { Form } from "antd"
import { Dayjs } from "dayjs"
import React from "react"
import DynamicForm, { FIELD_TYPE, IField } from "ui/common/dynamic-form"

interface OverviewProps {
}

const Overview = (props: OverviewProps) => {
  const [form] = Form.useForm()

  const fields: IField[] = [
    {
      id: 'text',
      name: 'text',
      type: FIELD_TYPE.TEXT,
      formItemProps: {
        label: 'Text'
      },
      breakpoint: { md: 8 }
    },
    {
      id: 'password',
      name: 'password',
      type: FIELD_TYPE.PASSWORD,
      formItemProps: {
        label: 'Password'
      },
      breakpoint: { md: 8 }
    },
    {
      id: 'number',
      name: 'number',
      type: FIELD_TYPE.NUMBER,
      formItemProps: {
        label: 'Number'
      },
      breakpoint: { md: 8 }
    },
    {
      id: 'select',
      name: 'select',
      type: FIELD_TYPE.SELECT,
      formItemProps: {
        label: 'Select (single)'
      },
      inputProps: {
        options: [
          { value: 'fresher', label: 'Fresher' },
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]
      },
      breakpoint: { md: 8 }
    },
    {
      id: 'multiselect',
      name: 'multiselect',
      type: FIELD_TYPE.SELECT,
      formItemProps: {
        label: 'Select (multiple)'
      },
      inputProps: {
        options: [
          { value: 'fresher', label: 'Fresher' },
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ],
        mode: 'multiple'
      },
      breakpoint: { md: 16 }
    },
    {
      id: 'date',
      name: 'date',
      type: FIELD_TYPE.DATE,
      formItemProps: {
        label: 'Date',
      },
      inputProps: {
        format: 'DD/MM/YYYY'
      },
      breakpoint: { md: 12 }
    },
    {
      id: 'time',
      name: 'time',
      type: FIELD_TYPE.TIME,
      formItemProps: {
        label: 'Time',
      },
      inputProps: {
        format: 'HH:mm',
        onSelect: (time: Dayjs) => form.setFieldValue('time', time)
      },
      breakpoint: { md: 12 }
    },
    {
      id: 'radio',
      name: 'radio',
      type: FIELD_TYPE.RADIO,
      formItemProps: {
        label: 'Radio'
      },
      inputProps: {
        options: [
          { value: 'fresher', label: 'Fresher' },
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]
      },
    },
    {
      id: 'checkbox',
      name: 'checkbox',
      type: FIELD_TYPE.CHECKBOX,
      formItemProps: {
        label: 'Checkbox'
      },
      inputProps: {
        options: [
          { value: 'fresher', label: 'Fresher' },
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]
      },
    },
    {
      id: 'text_area',
      name: 'text_area',
      type: FIELD_TYPE.TEXT_AREA,
      formItemProps: {
        label: 'TextArea'
      }
    },
    {
      id: 'upload',
      name: 'upload',
      type: FIELD_TYPE.FILE,
      formItemProps: {
        label: 'Upload'
      }
    },
    {
      id: 'template',
      name: 'template',
      type: FIELD_TYPE.TEMPLATE,
      formItemProps: {
        label: 'Template'
      }
    },
    {
      id: 'group',
      name: 'group',
      type: FIELD_TYPE.GROUP,
      canModify: true,
      children: [
        {
          id: 'name',
          name: 'name',
          type: FIELD_TYPE.TEXT,
          formItemProps: {
            label: 'Name'
          }
        },
        {
          id: 'gender',
          name: 'gender',
          type: FIELD_TYPE.SELECT,
          formItemProps: {
            label: 'Gender'
          },
          inputProps: {
            options: [
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]
          }
        },
      ]
    }
  ]

  return (
    <DynamicForm
      form={form}
      name='overview'
      fields={fields}
    />
  )
}

export default Overview