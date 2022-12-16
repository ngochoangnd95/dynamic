import { AutoComplete, Button, Checkbox, Col, Form, Input, InputNumber, Radio, Row, Select, Space, DatePicker, TimePicker } from "antd"
import { DEFAULT_FORM_ITEM_PROPS, DEFAULT_INPUT_PROPS, FIELD_TYPE } from "../constant"
import { IField } from "../interface"
import CustomEditor from "./custom/CustomEditor"
import CustomUpload from "./custom/CustomUpload"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styles from './styles.module.scss'

interface DynamicFieldEditProps {
  field: IField
}

const DynamicFieldEdit = (props: DynamicFieldEditProps) => {
  const renderInput = (field: IField) => {
    const inputProps = { ...DEFAULT_INPUT_PROPS[field.type], ...field.inputProps }
    switch (field.type) {
      case FIELD_TYPE.TEXT:
        return <Input {...inputProps} />
      case FIELD_TYPE.TEXT_AREA:
        return <Input.TextArea {...inputProps} />
      case FIELD_TYPE.SEARCH:
        return <Input.Search {...inputProps} />
      case FIELD_TYPE.PASSWORD:
        return <Input.Password {...inputProps} />
      case FIELD_TYPE.NUMBER:
        return <InputNumber {...inputProps} />
      case FIELD_TYPE.RADIO:
        return <Radio.Group {...inputProps} />
      case FIELD_TYPE.CHECKBOX:
        return <Checkbox.Group {...inputProps} />
      case FIELD_TYPE.SELECT:
        return <Select {...inputProps} />
      case FIELD_TYPE.AUTOCOMPLETE:
        return <AutoComplete {...inputProps} />
      case FIELD_TYPE.DATE:
        return <DatePicker {...inputProps} />
      case FIELD_TYPE.TIME:
        return <TimePicker {...inputProps} />
      case FIELD_TYPE.FILE:
        return <CustomUpload {...inputProps} />
      case FIELD_TYPE.TEMPLATE:
        return <CustomEditor {...inputProps} />
      case FIELD_TYPE.CUSTOM:
        return field.inputComponent
      default:
        break;
    }
    return <></>
  }

  const renderFormItem = (field: IField) => {
    return (
      <Form.Item
        name={field.name}
        {...DEFAULT_FORM_ITEM_PROPS}
        {...field.formItemProps}
      >
        {renderInput(field)}
      </Form.Item>
    )
  }

  const renderFormList = (parentField: IField) => {
    return (
      <Form.List
        name={parentField.name}
        initialValue={[{}]}
      >
        {(fields, { add, remove }) => (
          <Space direction="vertical" className={parentField.containerClassName}>
            {fields.map((field, index) => (
              <Row key={field.key} gutter={[16, 8]}>
                {parentField.children?.map((childField, idx) => (
                  <Col key={idx} {...childField.breakpoint}>
                    {renderFormItem({
                      ...childField,
                      name: Array.isArray(childField.name)
                        ? [field.name, ...childField.name]
                        : [field.name, childField.name]
                    })}
                  </Col>
                ))}
                {parentField.canModify && fields.length > 1 && (
                  <Col className={styles.fieldGroup__removeWrapper}>
                    <Button
                      onClick={() => remove(field.name)}
                      icon={<AiOutlineMinus />}
                    ></Button>
                  </Col>
                )}
              </Row>
            ))}
            {parentField.canModify && (
              <Form.Item>
                <Button
                  onClick={() => add()}
                  icon={<AiOutlinePlus />}
                >
                  Add
                </Button>
              </Form.Item>
            )}
          </Space>
        )}
      </Form.List>
    )
  }

  const render = () => {
    if (props.field.type === FIELD_TYPE.GROUP) {
      return renderFormList(props.field)
    }
    return renderFormItem(props.field)
  }

  return render()
}

export default DynamicFieldEdit