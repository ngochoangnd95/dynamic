import { ConfigProvider, Layout } from "antd"
import { ThemeConfig } from "antd/es/config-provider/context"
import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import SidebarMenu from "../../components/sidebar-menu"

interface RootProps {
}

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#FEA628'
  }
}

const Root = (props: RootProps) => {

  return (
    <ConfigProvider theme={theme}>
      <Layout className="min-h-screen">
        {/* <Layout.Sider>
          <SidebarMenu />
        </Layout.Sider> */}
        <Layout className="bg-white p-3">
          {/* <Layout.Header></Layout.Header> */}
          <Layout.Content>
            <Suspense>
              <Outlet />
            </Suspense>
          </Layout.Content>
          {/* <Layout.Footer></Layout.Footer> */}
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Root