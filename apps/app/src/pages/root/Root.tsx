import { Layout, Menu, MenuProps } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet, useMatch } from 'react-router-dom'

const Root = () => {
  const match = useMatch('/:key')

  const menuItems: MenuProps['items'] = [
    {
      key: '',
      label: (
        <Link to={'/'}>
          Home
        </Link>
      ),
    },
    {
      key: 'introduction',
      label: (
        <Link to={'/introduction'}>
          Introduction
        </Link>
      ),
    },
  ]

  return (
    <Layout className='min-h-screen'>
      <Layout.Sider theme='light'>
        <Menu
          items={menuItems}
          mode='inline'
          className='h-full'
          selectedKeys={[match?.params.key || '']}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='bg-white p-2'>
          <div data-color-mode='light'>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default Root