import { ChangeEvent } from 'react';

interface Contact {
  id: number,
  name: string,
  description: string;
  userId: number
}

type ContactsState = Contact[] | [];
type ContactWithoutId = Omit<Contact, 'id'>;
type ContactWithoutUserId = Omit<Contact, 'userId'>;

type ChangeContactsSearchValue = (event: ChangeEvent<HTMLInputElement>) => void;

interface ContactsProps {}
interface ContactsBehaviorProps extends ContactsProps {}
interface ContactsTemplateProps extends ContactsProps {
  contacts: ContactsState;
  isContactsLoading: boolean;
  searchValue:string;
  changeContactsSearchValue: ChangeContactsSearchValue;
}

export type {
  ContactsTemplateProps, ContactsBehaviorProps,
  Contact, ContactsState, ChangeContactsSearchValue,
  ContactWithoutId, ContactWithoutUserId,
};
