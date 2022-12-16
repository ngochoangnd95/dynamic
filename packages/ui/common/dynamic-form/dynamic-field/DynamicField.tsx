import { Col } from "antd"
import DynamicFieldEdit from "./dynamic-field-edit"
import { MODE } from "./constant"
import { IField } from "./interface"
import styles from './styles.module.scss'

type DynamicFieldProps = {
  field: IField
  mode: MODE
}

const DynamicField = (props: DynamicFieldProps) => {
  const renderField = () => {
    switch (props.mode) {
      case MODE.EDIT:
        return <DynamicFieldEdit field={props.field} />
      default:
        break;
    }
    return <></>
  }

  return (
    <Col xs={24} {...props.field.breakpoint} className={styles.fieldCol}>
      {renderField()}
    </Col>
  )
}

export default DynamicField