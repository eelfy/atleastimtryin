import { createContext, useContext } from 'react';
import ContactsStore from './stores/ContactsStore';
import TemplateStore from './stores/TemplateStore';

const store = {
  templateStore: new TemplateStore(),
  contactsStore: new ContactsStore(),
};

const RootStore = createContext(store);

const useStore = () => useContext(RootStore);

export { store, RootStore, useStore };
