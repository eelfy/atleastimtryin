import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useStore } from 'store/RootStore';
import { caseInsensitiveSearch } from 'utils/caseInsensitiveSearch';
import ContactCard from './components/ContactCard';
import NewContactCard from './components/NewContactCard';
import {
  ContactsBody, Cards, ContactsWrapper, CardsCounter,
} from './ContactsStyled';
import { ContactsTemplateProps } from './ContactsTypes';

const ContactsTemplate: FC<ContactsTemplateProps> = observer(({
  contacts,
  isContactsLoading,
  searchValue,
  changeContactsSearchValue,
}) => {
  const {
    contactsStore: {
      contactsCount,
    },
  } = useStore();

  return (
    <ContactsWrapper>
      <ContactsBody>
        <Input
          value={searchValue}
          onChange={changeContactsSearchValue}
          type="search"
          style={{ width: '300px' }}
          placeholder="Search via contact name"
        />
        <CardsCounter>
          all contacts count:
          {' '}
          <span>{contactsCount}</span>
        </CardsCounter>
        <Cards>
          {
            contacts
              .filter(
                (contact) => caseInsensitiveSearch(searchValue.trim(), contact.name),
              )
              .map(
                (contact) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    isContactsLoading={isContactsLoading}
                  />
                ),
              )
          }
          {!isContactsLoading && <NewContactCard />}
        </Cards>
      </ContactsBody>
    </ContactsWrapper>
  );
});

export default ContactsTemplate;
