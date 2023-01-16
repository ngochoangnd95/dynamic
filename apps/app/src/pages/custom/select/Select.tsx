import { Form } from 'antd'
import React from 'react'
import DynamicForm, { FIELD_TYPE, IField } from 'ui/common/dynamic-form'
import SelectCustomSelection from 'ui/shared/dynamic-field-variants/select-custom-selection'

const Select = () => {
  const [form] = Form.useForm()

  const fields: IField[] = [
    {
      id: '1',
      name: 'select',
      type: FIELD_TYPE.CUSTOM,
      formItemProps: {
        label: 'Rank'
      },
      inputComponent: (
        <SelectCustomSelection
          options={[
            { value: '1', label: 'S' },
            { value: '2', label: 'A' },
            { value: '3', label: 'B' },
            { value: '4', label: 'C' },
            { value: '5', label: 'D' },
            { value: '6', label: 'F' },
          ]}
        />
      )
    }
  ]

  return (
    <DynamicForm
      form={form}
      name='custom-select'
      fields={fields}
    />
  )
}

export default Select