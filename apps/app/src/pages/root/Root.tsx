import { Layout, Menu, MenuProps } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Root = () => {
  const location = useLocation()
  const selectedKeys = location.pathname.split('/').pop()

  const menuItems: MenuProps['items'] = [
    {
      key: '',
      label: (
        <Link to={'/'}>
          Giới thiệu
        </Link>
      ),
    },
    {
      key: 'philosophy',
      label: (
        <Link to={'/philosophy'}>
          Triết lý
        </Link>
      ),
    },
    {
      key: 'dynamic-field',
      label: (
        <Link to={'/dynamic-field'}>
          DynamicField
        </Link>
      ),
    },
    {
      key: 'custom',
      label: 'Tuỳ biến',
      children: [
        {
          key: 'select',
          label: (
            <Link to={'/custom/select'}>
              Select
            </Link>
          )
        }
      ]
    },
  ]

  return (
    <Layout className='min-h-screen'>
      <Layout.Sider theme='light'>
        <Menu
          items={menuItems}
          mode='inline'
          className='h-full'
          selectedKeys={[selectedKeys || '']}
          defaultOpenKeys={['custom']}
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