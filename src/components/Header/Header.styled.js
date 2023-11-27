import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
  gap: 16px;
  text-transform: uppercase;
  font-family: 'AvenirNextCyrBold';
  font-size: 16px;
`;

export const LogoLink = styled(Link)`
  /* text-align: center; */
  color: ${p => p.theme.colors.black};
`;

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.header};
`;

export const StyledTel = styled.a`
  font-family: 'AvenirNextCyrBold';
  white-space: nowrap;
  color: ${p => p.theme.colors.tel};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  margin-bottom: ${p => p.$modal && '20px'};
`;

export const DonationBtn = styled(Link)`
  text-align: center;
  white-space: nowrap;
  font-family: 'AvenirNextCyrBold';
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding: 16px;
  border-radius: 10px;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media ${p => p.theme.media.tablet} {
    gap: 8px;
  }
`;
export const ModalContentWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MenuBtn = styled.button`
  justify-self: flex-start;
  align-self: ${p => p.$modal && 'start'};
  background-color: transparent;
  border: 0;
`;
