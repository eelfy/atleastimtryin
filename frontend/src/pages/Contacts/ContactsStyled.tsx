import { Card } from 'antd';
import styled, { css } from 'styled-components';

const mainGap = css`
  gap: 16px;
`;

const ContactsWrapper = styled.section`
  height: 100%;
  width: 100%;
`;

const ContactsBody = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mainGap}
`;

const CardsCounter = styled.div`
  color: var(--color-gray);
  font-size: 16px;

  &>span {
    color: var(--color-blue)
  }
`;

const Cards = styled.div`
  max-width: 70vw;
  max-height: 600px;

  overflow-x: auto;
  
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${mainGap}
`;

const StyledCard = styled(Card)`
  width: 300px;
  
  box-shadow: var(--shadow-default);
`;

export {
  ContactsWrapper, ContactsBody, CardsCounter, Cards,
  StyledCard,
};
