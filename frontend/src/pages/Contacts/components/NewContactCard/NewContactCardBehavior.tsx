import { FC, useState } from 'react';
import { NewContactCardBehaviorProps } from './NewContactCardTypes';
import NewContactCardTemplate from './NewContactCardTemplate';

const NewContactCardBehavior: FC<NewContactCardBehaviorProps> = ({

}) => {
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false);
  return (
    <NewContactCardTemplate
      isCreateMode={isCreateMode}
      setIsCreateMode={setIsCreateMode}
    />
  );
};

export default NewContactCardBehavior;
