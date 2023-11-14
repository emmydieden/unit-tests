export const isEmpty = (stringArrayOrObject) => {
  switch (typeof stringArrayOrObject) {
    case 'string':
      return stringArrayOrObject === ''
    case 'array':
      return stringArrayOrObject.length === 0
    case 'object':
      return Object.keys(stringArrayOrObject).length === 0
  }
}