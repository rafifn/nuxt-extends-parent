export const useStoreCounter = () => {
  const count = 0
  return useState('counter', () => count)
}
