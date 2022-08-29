import {
  Dispatch, FormEvent, SetStateAction,
} from 'react';

type HandleLoginSubmit = (event: FormEvent<HTMLFormElement>) => void;

interface LoginProps {}
interface LoginBehaviorProps extends LoginProps {}
interface LoginTemplateProps extends LoginProps {
  loginOptions: AuthInputsOptions;
  passwordOptions: AuthInputsOptions;
  handleLoginSubmit: HandleLoginSubmit;
}

abstract class AuthInputsOptions {
  constructor(value: string, setValue:Dispatch<SetStateAction<string>>) {
    this.value = value;
    this.setValue = setValue;
  }

  readonly value;

  private setValue;

  changeValue = (event: FormEvent<HTMLInputElement>) => {
    this.setValue(event.currentTarget.value);
  };
}

export { AuthInputsOptions };
export type { LoginTemplateProps, LoginBehaviorProps, HandleLoginSubmit };
