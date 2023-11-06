import { MenuOutlined, PictureOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Sider } = Layout;

const SideMenu: React.FC<{ onCollapse?: () => void }> = ({ onCollapse }) => {
  const items: MenuProps['items'] = [
    {
      key: '0',
      icon: <MenuOutlined />,
      label: <Link href="/">메인</Link>,
    },
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link href="/user">사용자</Link>,
    },
    {
      key: '2',
      icon: <PictureOutlined />,
      label: <Link href="/sample">샘플</Link>,
    },
  ];

  const router = useRouter();
  const { pathname } = router;
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([] as string[]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setSelectedKeys(['0']);
        break;
      case '/user':
        setSelectedKeys(['1']);
        break;
      case '/sample':
        setSelectedKeys(['2']);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} items={items} />
    </Sider>
  );
};

export default SideMenu;
