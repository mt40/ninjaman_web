export const toPrettyJson = (value: any) => {
  return JSON.stringify(value, null, 2)
}