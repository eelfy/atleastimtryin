import { FC } from 'react';
import { PageContainerWithNavMenuBehaviorProps } from './PageContainerWithNavMenuTypes';
import PageContainerWithNavMenuTemplate from './PageContainerWithNavMenuTemplate';

const PageContainerWithNavMenuBehavior: FC<PageContainerWithNavMenuBehaviorProps> = ({
  children,
}) => (
  <PageContainerWithNavMenuTemplate>{children}</PageContainerWithNavMenuTemplate>
);

export default PageContainerWithNavMenuBehavior;
