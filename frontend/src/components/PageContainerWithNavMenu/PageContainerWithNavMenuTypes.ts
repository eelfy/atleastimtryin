import { ReactNode } from 'react';

interface PageContainerWithNavMenuProps {children: ReactNode}
interface PageContainerWithNavMenuTemplateProps extends PageContainerWithNavMenuProps {}
interface PageContainerWithNavMenuBehaviorProps extends PageContainerWithNavMenuProps {}

export type { PageContainerWithNavMenuTemplateProps, PageContainerWithNavMenuBehaviorProps };
