import { makeAutoObservable } from 'mobx';

class TemplateStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default TemplateStore;
