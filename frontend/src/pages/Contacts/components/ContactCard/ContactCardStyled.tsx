import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const CardStringContent = styled.div`
  line-height: 32px;
`;

const AcceptIcon = styled(CheckOutlined)`
  &&& {
    &:hover {
      color: var(--color-green);
    }
  }
`;

const DenyIcon = styled(CloseOutlined)`
  &&& {
    &:hover {
      color: var(--color-red);
    }
  }
`;

export {
  AcceptIcon, DenyIcon,
  CardStringContent,
};
