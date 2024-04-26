let lastId = 0

export const generateId = (prefix = "id") => {
  return `${prefix}-${++lastId}`
}
