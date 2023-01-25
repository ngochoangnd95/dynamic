import { MDXProvider } from '@mdx-js/react'
import { Typography } from 'antd'
import { MDXComponents } from 'mdx/types'

const CustomMDXProvider = (props: any) => {
  const components: MDXComponents = {
  }

  return (
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  )
}

export default CustomMDXProvider