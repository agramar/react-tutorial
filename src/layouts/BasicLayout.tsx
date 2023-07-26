import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState, useCallback } from "react";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

export function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [menuList, setMenuList] = useState([
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ]);

  const handleAddMenuList = useCallback(() => {
    setMenuList(menuList.concat([
      {
        key: "4",
        icon: <UserOutlined />,
        label: "nav 4",
      },
      {
        key: "5",
        icon: <VideoCameraOutlined />,
        label: "nav 5",
      },
      {
        key: "6",
        icon: <UploadOutlined />,
        label: "nav 6",
      },
    ]))
  }, []);

  const handleRemoveMenuList = useCallback(() => {
    setMenuList([
      {
        key: "1",
        icon: <UserOutlined />,
        label: "nav 1",
      },
      {
        key: "2",
        icon: <VideoCameraOutlined />,
        label: "nav 2",
      },
      {
        key: "3",
        icon: <UploadOutlined />,
        label: "nav 3",
      },
    ])
  }, []);


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuList}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => handleAddMenuList()}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => handleRemoveMenuList()}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
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
}

export default BasicLayout;
