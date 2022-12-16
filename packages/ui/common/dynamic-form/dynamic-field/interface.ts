import { NamePath } from "antd/es/form/interface"
import { FormListProps, FormItemProps } from "antd/lib/form"
import React from "react"
import { FIELD_TYPE, MODE } from "./constant"

type IFieldNormal = {
  id: string
  type: FIELD_TYPE
  name: NamePath
  formItemProps?: FormItemProps
  formListProps?: FormListProps
  inputProps?: any
  breakpoint?: {
    xs?: number
    md?: number
    xl?: number
    xxl?: number
  }
  mode?: MODE
  inputComponent?: React.ReactNode
}

type IFieldGroup = {
  children?: Array<IField>
  containerClassName?: string
  itemClassName?: string
  canModify?: boolean
}

type IFieldUpload = {
}

export type IField = IFieldNormal & IFieldGroup & IFieldUpload
