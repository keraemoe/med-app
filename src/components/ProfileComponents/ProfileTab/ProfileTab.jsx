import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const ProfileTab = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined, AndroidOutlined, AndroidOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon style={{
              fontSize: '40px'
            }} />
            {
              id == 1 ? 'About' : 'ok'
            }
          </span>
        ),
        key: id,
        children: `Tab ${id}`,
      };
    })}
  />
);
export default ProfileTab;