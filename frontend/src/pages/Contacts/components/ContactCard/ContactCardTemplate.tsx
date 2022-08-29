import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Input, Skeleton } from 'antd';
import { observer } from 'mobx-react-lite';
import { StyledCard } from 'pages/Contacts/ContactsStyled';
import { ContactWithoutUserId } from 'pages/Contacts/ContactsTypes';
import {
  ChangeEvent, Dispatch, FC, SetStateAction,
} from 'react';
import { useStore } from 'store/RootStore';
import { AcceptIcon, CardStringContent, DenyIcon } from './ContactCardStyled';
import { ContactCardTemplateProps, DefaultCardProps, EditCardProps } from './ContactCardTypes';

const { Meta } = Card;

const DefaultCard: FC<DefaultCardProps> = observer(({
  contact, isContactsLoading, setIsEditMode,
}) => {
  const {
    contactsStore: {
      removeContact,
    },
  } = useStore();
  return (
    <StyledCard
      actions={!isContactsLoading ? [
        <EditOutlined key="edit" onClick={() => setIsEditMode(true)} />,
        <DeleteOutlined key="delete" onClick={() => removeContact(contact.id)} />,
      ] : []}
    >
      <Skeleton loading={isContactsLoading} active>
        <Meta
          title={(
            <CardStringContent>
              {contact.name}
            </CardStringContent>
          )}
          description={(
            <CardStringContent>
              {contact.description}
            </CardStringContent>
          )}
        />
      </Skeleton>
    </StyledCard>
  );
});

const EditCard: FC<EditCardProps> = ({
  contact, setIsEditMode, contactFieldsOptions,
}) => {
  const {
    contactsStore: {
      editContact,
    },
  } = useStore();

  const changeContactFieldViaInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setStateCallback: Dispatch<SetStateAction<string>>,
  ) => {
    setStateCallback(event.currentTarget.value);
  };

  const acceptCardChanges = () => {
    const editedContact: ContactWithoutUserId = {
      id: contact.id,
      name: contactFieldsOptions.name.state,
      description: contactFieldsOptions.description.state,
    };

    editContact(contact, editedContact).finally(() => exitFromEditMode());
  };

  const denyCardChanges = () => {
    exitFromEditMode();
    dropAllCardInputsToInit();
  };

  function dropAllCardInputsToInit() {
    contactFieldsOptions.name.setState(contact.name);
    contactFieldsOptions.description.setState(contact.description);
  }

  function exitFromEditMode() {
    setIsEditMode(false);
  }

  return (
    <StyledCard
      key={contact.id}
      actions={[
        <AcceptIcon key="accept" onClick={acceptCardChanges} />,
        <DenyIcon key="deny" onClick={denyCardChanges} />,
      ]}
    >

      <Meta
        title={(
          <Input
            value={contactFieldsOptions.name.state}
            onChange={(event) => changeContactFieldViaInputChange(
              event,
              contactFieldsOptions.name.setState,
            )}
          />
        )}
        description={(
          <Input
            value={contactFieldsOptions.description.state}
            onChange={(event) => changeContactFieldViaInputChange(
              event,
              contactFieldsOptions.description.setState,
            )}
          />
        )}
      />

    </StyledCard>
  );
};

const ContactCardTemplate: FC<ContactCardTemplateProps> = ({
  contact,
  isContactsLoading,
  isEditMode,
  setIsEditMode,
  contactFieldsOptions,
}) => (
  isEditMode
    ? (
      <EditCard
        contact={contact}
        setIsEditMode={setIsEditMode}
        contactFieldsOptions={contactFieldsOptions}
      />
    )
    : (
      <DefaultCard
        contact={contact}
        setIsEditMode={setIsEditMode}
        isContactsLoading={isContactsLoading}
      />
    )
);

export default ContactCardTemplate;
