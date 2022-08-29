import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/RootStore';
import { ChangeContactsSearchValue, ContactsBehaviorProps } from './ContactsTypes';
import ContactsTemplate from './ContactsTemplate';

const ContactsBehavior: FC<ContactsBehaviorProps> = observer(() => {
  const {
    contactsStore: {
      contacts,
      fetchContacts,
    },
  } = useStore();
  const [isContactsLoading, setIsContactsLoading] = useState<boolean>(true);

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    fetchContacts().finally(() => setIsContactsLoading(false));
  }, []);

  const changeContactsSearchValue: ChangeContactsSearchValue = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <ContactsTemplate
      contacts={contacts}
      isContactsLoading={isContactsLoading}
      searchValue={searchValue}
      changeContactsSearchValue={changeContactsSearchValue}
    />
  );
});

export default ContactsBehavior;
