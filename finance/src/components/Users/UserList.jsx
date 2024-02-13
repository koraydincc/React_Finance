import React from 'react';
import { useFetchUsersQuery } from '../../store';
import { Menu, Skeleton } from 'antd';

function UserList() {
  const { data, isError, isLoading } = useFetchUsersQuery();

  let content;
  if (isLoading) {
    content = <Skeleton active style={{ width: '100%', height: '600px' }} />;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = (
      <Menu mode="inline"  theme="dark">
        {data.map(user => (
          <Menu.Item key={user.id}>
            <span style={{ color: 'white' }}>{user.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  return <div>{content}</div>;
}

export default UserList;
