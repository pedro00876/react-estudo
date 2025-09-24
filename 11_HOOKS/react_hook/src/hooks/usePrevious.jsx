import { useEffect, useRef, useDebugValue } from 'react'

export const usePrevious = value => {
  const ref = useRef

  useDebugValue('----- CUSTOM HOOK DEBUG VALUE -----')
  useDebugValue('o número anterior é: ' + value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// aaaaaa
