import { Layout, theme } from 'antd';
import SideMenu from '../SideMenu';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 800,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
