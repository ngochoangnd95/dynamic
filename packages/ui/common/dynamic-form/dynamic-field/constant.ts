import { AutoCompleteProps, SelectProps, UploadProps } from "antd";
import { FormItemProps } from "antd/lib/form";
import { TextAreaProps } from "antd/lib/input";

export enum FIELD_TYPE {
  TEXT,
  TEXT_AREA,
  SEARCH,
  PASSWORD,
  NUMBER,
  SELECT,
  CHECKBOX,
  RADIO,
  AUTOCOMPLETE,
  DATE,
  TIME,
  FILE,
  GROUP,
  TEMPLATE,
  CUSTOM,
}

export enum MODE {
  EDIT,
  VIEW,
}

export const DEFAULT_FORM_ITEM_PROPS: Partial<FormItemProps> = {
  colon: false,
  validateFirst: true,
}

export const DEFAULT_INPUT_PROPS: any = {
  [FIELD_TYPE.TEXT_AREA]: <TextAreaProps>{
    rows: 4,
  },
  [FIELD_TYPE.SELECT]: <SelectProps>{
    allowClear: true,
    showAction: ['focus', 'click'],
  },
  [FIELD_TYPE.AUTOCOMPLETE]: <AutoCompleteProps>{
    allowClear: true,
    filterOption: true,
  },
  [FIELD_TYPE.FILE]: <UploadProps>{
    type: 'drag',
    listType: "picture",
    multiple: true,
  },
}