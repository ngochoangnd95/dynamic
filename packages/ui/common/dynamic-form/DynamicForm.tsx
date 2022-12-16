import { Form, FormInstance, FormProps, Row } from "antd"
import React from "react"
import DynamicField, { IField, MODE } from "./dynamic-field"
import { DEFAULT_FORM_PROPS, HEADER_HEIGHT } from "./constant"

interface DynamicFormProps extends FormProps {
  form: FormInstance
  name: string
  fields: IField[]
  formActions?: React.ReactNode
}

const DynamicForm = (props: DynamicFormProps) => {
  const { form, fields, formActions, name, ...rest } = props

  const handleFinishFailed = (values: any) => {
    const fieldName = Array.isArray(values.errorFields[0].name)
      ? values.errorFields[0].name.join("_")
      : values.errorFields[0].name
    const fieldId = `${name}_${fieldName}`
    const element = document.getElementById(fieldId)
    window.scrollTo({ top: (element?.getBoundingClientRect().top ?? 0) + window.scrollY - HEADER_HEIGHT, behavior: "smooth" })
  }

  return (
    <Form
      form={form}
      onFinishFailed={handleFinishFailed}
      {...DEFAULT_FORM_PROPS}
      {...rest}
    >
      <Row gutter={[16, 8]}>
        {fields.map((field, index) => (
          <DynamicField key={index} field={field} mode={field.mode || MODE.EDIT} />
        ))}
      </Row>
      {formActions && (
        <Form.Item>{formActions}</Form.Item>
      )}
    </Form>
  )
}

export default DynamicForm