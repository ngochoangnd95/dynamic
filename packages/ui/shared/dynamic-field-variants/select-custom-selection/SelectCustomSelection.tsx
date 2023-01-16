import { Divider, Select, Checkbox } from "antd"
import { SelectProps } from 'antd/es/select'
import { CheckboxChangeEvent } from "antd/es/checkbox"
import React, { useState } from "react"
import styles from './styles.module.scss'

interface SelectCustomSelectionProps extends SelectProps {
  customLabel?: {
    selectAll?: string
  }
}

const defaultCustomLabel = {
  selectAll: 'Chọn tất cả'
}

const SelectCustomSelection = (props: SelectCustomSelectionProps) => {
  const {
    options = [],
    onChange,
    customLabel = defaultCustomLabel,
    ...rest
  } = props
  const [value, setValue] = useState<any[]>([])
  const [checkAll, setCheckAll] = useState(false)
  const [indeterminate, setIndeterminate] = useState(value.length > 0)

  const handleChange = (list: any[], option: any) => {
    setValue(list)
    onChange?.(list, option)
    setIndeterminate(!!list.length && list.length < options.length)
    setCheckAll(list.length === options.length)
  }

  const handleCheckAll = (e: CheckboxChangeEvent) => {
    const temp = e.target.checked ? options.map(e => e.value) : []
    setValue(temp)
    onChange?.(temp, options)
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  const dropdownRender = (menu: React.ReactNode) => (
    <>
      <div>{menu}</div>
      <Divider className={styles.divider} />
      <div className={styles.selectionWrapper}>
        <Checkbox
          checked={checkAll}
          onChange={handleCheckAll}
          indeterminate={indeterminate}
        >
          {customLabel.selectAll}
        </Checkbox>
      </div>
    </>
  )

  return (
    <Select
      {...rest}
      options={options}
      allowClear
      mode={'multiple'}
      onChange={handleChange}
      dropdownRender={dropdownRender}
    />
  )
}

export default SelectCustomSelection
