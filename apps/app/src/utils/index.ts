export const JsonParse = (value: any) => {
  let result
  if (typeof value !== 'string') return result
  try {
    result = JSON.parse(value)
  } catch (error) {
    // do nothing
  }
  return result
}