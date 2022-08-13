import { createContext, useContext } from 'react';
import TemplateStore from './stores/TemplateStore';

export const store = {
  templateStore: new TemplateStore(),
};

export const RootStore = createContext(store);

export const useStore = () => useContext(RootStore);
