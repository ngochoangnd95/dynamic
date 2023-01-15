import { useEffect, useState } from 'react'

const useMarkdownFile = (importLoader: Promise<any>) => {
  const [data, setData] = useState<string>('')
  useEffect(() => {
    importLoader
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => {
            setData(res)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }, [])

  return { data }
}

export default useMarkdownFile