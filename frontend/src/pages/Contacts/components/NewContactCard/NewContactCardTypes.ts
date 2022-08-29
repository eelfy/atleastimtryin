import { Dispatch, SetStateAction } from 'react';

interface NewContactCardProps {}
interface NewContactCardTemplateProps extends NewContactCardProps {
  isCreateMode: boolean;
  setIsCreateMode: Dispatch<SetStateAction<boolean>>;
}
interface NewContactCardBehaviorProps extends NewContactCardProps {}

interface NewCardPreviewProps {
  setIsCreateMode: Dispatch<SetStateAction<boolean>>;
}

interface NewCardCreateProps {
  setIsCreateMode: Dispatch<SetStateAction<boolean>>;
}

export type {
  NewContactCardTemplateProps, NewContactCardBehaviorProps,
  NewCardPreviewProps, NewCardCreateProps,
};
