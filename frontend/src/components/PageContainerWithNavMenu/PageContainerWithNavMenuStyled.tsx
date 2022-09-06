import styled from 'styled-components';

const Container = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(16, 1fr);
    width: 100%;
`;

const NavMenu = styled.div`
    grid-area: 1 / 1 / 6 / 2; 

    background-color: #fff;
    
    width: 100%;
    height: 100vh;

    box-shadow: var(--shadow-default);
`;

const NavContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    height: 100%;
    width: 100%;

    padding: 20px 0;
`;
const NavTop = styled.div``;
const NavBottom = styled.div``;

const ChildrenComponent = styled.div`
    grid-area: 1 / 2 / 6 / 17; 
    width: 100%;
`;

export {
  Container,
  NavMenu, NavContent, NavTop, NavBottom,
  ChildrenComponent,
};
