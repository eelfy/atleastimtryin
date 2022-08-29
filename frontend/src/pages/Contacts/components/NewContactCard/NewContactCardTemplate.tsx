import { PlusOutlined } from '@ant-design/icons';
import {
  Button, Input, InputRef,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC, useRef } from 'react';
import { getUser } from 'utils/user';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/RootStore';
import { StyledCard } from 'pages/Contacts/ContactsStyled';
import { NewCardCreateProps, NewCardPreviewProps, NewContactCardTemplateProps } from './NewContactCardTypes';
import { AcceptIcon, DenyIcon } from '../ContactCard/ContactCardStyled';
import { StyledNewCardPreview } from './NewContactCardStyled';

const NewCardPreview:FC<NewCardPreviewProps> = ({ setIsCreateMode }) => (
  <StyledNewCardPreview>
    <Button
      type="primary"
      shape="circle"
      icon={<PlusOutlined />}
      onClick={() => {
        setIsCreateMode(true);
      }}
    />
  </StyledNewCardPreview>
);

const NewCardCreate:FC<NewCardCreateProps> = observer(({ setIsCreateMode }) => {
  const {
    contactsStore: {
      addContact,
    },
  } = useStore();

  const refName = useRef<InputRef>(null);
  const refDescription = useRef<InputRef>(null);

  const user = getUser();

  const createNewCard = () => {
    if (user) {
      addContact({
        userId: user.user.id,
        name: refName.current?.input?.value ?? '',
        description: refDescription.current?.input?.value ?? '',
      }).then(() => {
        exitFromCreateMode();
      });
    }
  };

  const exitFromCreateMode = () => {
    setIsCreateMode(false);
  };

  return (
    <StyledCard
      actions={[
        <AcceptIcon key="accept" onClick={createNewCard} />,
        <DenyIcon key="deny" onClick={exitFromCreateMode} />,
      ]}
    >
      <Meta
        title={(
          <Input placeholder="name" ref={refName} />
        )}
        description={(
          <Input placeholder="description" ref={refDescription} />
        )}
      />
    </StyledCard>
  );
});

const NewContactCardTemplate: FC<NewContactCardTemplateProps> = ({
  isCreateMode,
  setIsCreateMode,
}) => (
  isCreateMode ? (
    <NewCardCreate setIsCreateMode={setIsCreateMode} />
  ) : (
    <NewCardPreview setIsCreateMode={setIsCreateMode} />
  ));

export default NewContactCardTemplate;
