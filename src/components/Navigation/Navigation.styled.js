import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: ${p => (p.$footer ? 'start' : 'center')};
  justify-content: space-between;
  gap: ${p => p.theme.space[5]}px;
  cursor: pointer;

  flex-direction: ${p => (p.$modal ? 'column' : p.$footer ? 'column' : 'row')};
  margin: ${p => p.$modal && '40px'};

  text-transform: uppercase;
  font-family: 'AvenirNextCyrBold';
  font-size: 16px;
`;
