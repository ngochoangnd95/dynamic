import { Menu, MenuProps } from "antd"
import React from "react"
import { Link, useMatch } from "react-router-dom"

interface SidebarMenuProps {
}

const SidebarMenu = (props: SidebarMenuProps) => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'overview',
      label: <Link to={'/overview'}>Tổng quan</Link>
    },
  ]
  const match = useMatch('/:page/*')

  return (
    <Menu
      mode="inline"
      theme="dark"
      items={menuItems}
      selectedKeys={[match?.params.page || '']}
    />
  )
}

export default SidebarMenu