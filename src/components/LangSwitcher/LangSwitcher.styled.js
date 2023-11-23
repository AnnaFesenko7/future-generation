import styled from 'styled-components';

export const LangSwitcherWrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.$modal && '50px'};
`;

export const StyledLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
`;

export const StyledSpan = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'AvenirNextCyrBold';

  @media ${p => p.theme.media.tablet} {
    font-size: 14px;
  }

  @media ${p => p.theme.media.desktop} {
    font-size: 16px;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  background-color: ${p => p.theme.colors.backgroundBody};
  top: 100%;
  left: 0;
  border: ${p => p.theme.borders.dropdown};
  border-radius: 10px;
`;

export const StyledItem = styled.li`
  text-align: center;
`;
