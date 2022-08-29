import { Dispatch, SetStateAction } from 'react';
import { Contact } from 'pages/Contacts/ContactsTypes';

type ContactFieldsOptions = Record<
'name' | 'description',
{ state: string, setState: Dispatch<SetStateAction<string>> }
>;

interface ContactCardProps {
  contact: Contact;
  isContactsLoading: boolean;
}

interface ContactCardTemplateProps extends ContactCardProps {
  isEditMode:boolean;
  setIsEditMode:Dispatch<SetStateAction<boolean>>;
  contactFieldsOptions: ContactFieldsOptions;
}
interface ContactCardBehaviorProps extends ContactCardProps {}

interface ListedCardProps {
  contact: Contact;
  setIsEditMode:Dispatch<SetStateAction<boolean>>;
}

interface DefaultCardProps extends ListedCardProps {
  isContactsLoading: boolean;
}

interface EditCardProps extends ListedCardProps {
  contactFieldsOptions: ContactFieldsOptions;
}

export type {
  ContactFieldsOptions,
  ContactCardTemplateProps, ContactCardBehaviorProps,
  DefaultCardProps, EditCardProps,
};
