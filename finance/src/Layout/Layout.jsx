import React, { useState } from 'react';
import { Layout, Menu} from 'antd';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserList from '../components/Users/UserList'; 
import Navbar from '../components/Navbar/Navbar'; // Kullanıcı tarafından oluşturulan Navbar bileşeni

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" style={{marginTop:'20px'}}>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Hesap Bilgileri">
            <Menu.Item key="2">Kredi Kartları</Menu.Item>
            <Menu.Item key="3">Banka Hesapları</Menu.Item>
            <Menu.Item key="4">Kripto Hesapları</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileOutlined />} title="Raporlar">
            <Menu.Item key="5">Günlük Raporlar</Menu.Item>
            <Menu.Item key="6">Aylık Raporlar</Menu.Item>
            <Menu.Item key="7">Yıllık Raporlar</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<TeamOutlined />} title="Kullanıcılar">
            <UserList />
          </SubMenu>
          <Menu.Item key="11" icon={<FileOutlined />}>
            <Link to="/dosyalar">Dosyalar</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Navbar /> {/* Kullanıcı tarafından oluşturulan Navbar bileşeni */}
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Content burada olmalı */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@koraydincc</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
