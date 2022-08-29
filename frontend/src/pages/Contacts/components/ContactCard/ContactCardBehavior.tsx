import { FC, useState } from 'react';
import { ContactCardBehaviorProps, ContactFieldsOptions } from './ContactCardTypes';
import ContactCardTemplate from './ContactCardTemplate';

const ContactCardBehavior: FC<ContactCardBehaviorProps> = ({
  contact,
  isContactsLoading,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [contactName, setContactName] = useState<string>(contact.name);
  const [contactDescription, setContactDescription] = useState<string>(contact.description);

  const contactFieldsOptions: ContactFieldsOptions = {
    name: {
      state: contactName,
      setState: setContactName,
    },
    description: {
      state: contactDescription,
      setState: setContactDescription,
    },
  };

  return (
    <ContactCardTemplate
      contact={contact}
      isContactsLoading={isContactsLoading}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
      contactFieldsOptions={contactFieldsOptions}
    />
  );
};

export default ContactCardBehavior;
