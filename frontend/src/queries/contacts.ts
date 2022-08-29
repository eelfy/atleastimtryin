import { QueryRefs } from 'consts/queryRefs';
import { ContactWithoutId, ContactWithoutUserId } from 'pages/Contacts/ContactsTypes';
import { customFetch } from 'utils/customFetch';
import { User } from 'utils/user';

const ContactsQuery = {
  getAll: (user: User) => customFetch(QueryRefs.Contacts, {
    params: {
      userId: user.user.id,
    },
  }),

  delete: (contactId: number) => customFetch(`${QueryRefs.Contacts}/${contactId}`, {
    method: 'DELETE',
  }),

  edit: (editedContact: ContactWithoutUserId) => customFetch(
    `${QueryRefs.Contacts}/${editedContact.id}`,
    {
      method: 'PATCH',
      body: {
        name: editedContact.name,
        description: editedContact.description,
      },
    },
  ),

  create: (newContact: ContactWithoutId) => customFetch(
    QueryRefs.Contacts,
    {
      method: 'POST',
      body: {
        ...newContact,
      },
    },
  ),
};

export { ContactsQuery };
