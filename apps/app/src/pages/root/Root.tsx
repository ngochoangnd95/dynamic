import { ConfigProvider } from "antd"
import { ThemeConfig } from "antd/es/config-provider/context"
import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"

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
      <section className="flex flex-col min-h-screen">
        <main className="flex-auto py-5 px-0 sm:px-5">
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </section>
    </ConfigProvider>
  )
}

export default Root