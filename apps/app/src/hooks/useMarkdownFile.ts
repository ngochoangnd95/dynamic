import { useEffect, useState } from 'react'

const useMarkdownFile = (path: string) => {
  const [data, setData] = useState<string>('')
  useEffect(() => {
    import(path)
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