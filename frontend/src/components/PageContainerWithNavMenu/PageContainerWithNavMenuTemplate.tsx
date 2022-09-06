import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useLogout } from 'hooks/useLogout';
import { FC } from 'react';
import {
  ChildrenComponent, Container, NavBottom, NavContent, NavMenu, NavTop,
} from './PageContainerWithNavMenuStyled';
import { PageContainerWithNavMenuTemplateProps } from './PageContainerWithNavMenuTypes';

const PageContainerWithNavMenuTemplate: FC<PageContainerWithNavMenuTemplateProps> = ({
  children,
}) => {
  const logout = useLogout();
  return (
    <Container>
      <NavMenu>
        <NavContent>
          <NavTop />
          <NavBottom>
            <Button
              type="primary"
              shape="circle"
              icon={<LogoutOutlined />}
              onClick={logout}
            />
          </NavBottom>
        </NavContent>
      </NavMenu>

      <ChildrenComponent>{children}</ChildrenComponent>
    </Container>
  );
};

export default PageContainerWithNavMenuTemplate;
