export enum META_TYPE {
  CODE = 1,
  CODE_DEMO,
}

export type DATA_META = {
  type: META_TYPE
  blockName?: string
}