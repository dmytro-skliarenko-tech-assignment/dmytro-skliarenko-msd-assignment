import React, { ReactElement } from 'react';
import { Layout } from 'antd'

const { Header, Content } = Layout;

type AppLayoutProps = {
  children: JSX.Element,
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
      <Layout>
        <Header style={{ background: 'white', color: '#1C3F3B', fontStyle: 'bold', fontSize: '20px' }}>
          App title
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    )
  }
 
export default AppLayout;