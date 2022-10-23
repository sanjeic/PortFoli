import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Email Me',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Contact Info',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Switch Themes',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Themes',
        children: [
          {
            label: 'Trhee.js',
            key: 'setting:1',
          },
          {
            label: 'Standar',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Take a look at my work
      </a>
    ),
    key: 'alipay',
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;
