const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('ACTION: ', action)
    const retVal = next(action)
    console.log('NEW STATE: ', store.getState())
  console.groupEnd()
  return retVal
}

export default logger