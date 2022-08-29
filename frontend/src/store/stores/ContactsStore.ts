import { makeAutoObservable } from 'mobx';
import { ContactsQuery } from 'queries/contacts';
import { Contact, ContactWithoutId, ContactWithoutUserId } from 'pages/Contacts/ContactsTypes';
import { getUser } from 'utils/user';

class ContactsStore {
  contacts: Contact[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get contactsCount(): number {
    return this.contacts.length;
  }

  removeContact = async (contactId: number) => {
    await ContactsQuery.delete(contactId);
    this.removeContactLocally(contactId);
  };

  addContact = (newContact: ContactWithoutId) => ContactsQuery.create(newContact)
    .then((createdContact: Contact) => {
      this.addContactLocally({ ...newContact, id: createdContact.id });
    });

  // eslint-disable-next-line class-methods-use-this
  editContact = async (currentContact: Contact, editedContact: ContactWithoutUserId) => {
    await ContactsQuery.edit(editedContact).then((updatedContact: Contact) => {
      // eslint-disable-next-line no-param-reassign
      currentContact.name = updatedContact.name;
      // eslint-disable-next-line no-param-reassign
      currentContact.description = updatedContact.description;
    });
  };

  removeContactLocally = (contactId: number) => {
    const newContacts = this.contacts.filter((contact) => contact.id !== contactId);
    this.contacts = newContacts;
  };

  addContactLocally = (newContact: Contact) => {
    this.contacts.push(newContact);
  };

  fetchContacts = async () => {
    const user = getUser();
    if (user) {
      await ContactsQuery
        .getAll(user)
        .then((contactsData: Contact[]) => {
          this.contacts = contactsData;
        });
    }
  };
}

export default ContactsStore;
