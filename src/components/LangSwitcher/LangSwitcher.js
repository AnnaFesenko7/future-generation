import { useState } from 'react';
import {
  StyledLink,
  StyledSpan,
  Dropdown,
  LangSwitcherWrapper,
  StyledItem,
} from './LangSwitcher.styled';
import { ImSphere } from 'react-icons/im';
import { BsChevronCompactDown } from 'react-icons/bs';

export const LangSwitcher = ({ onChangeLanguage, currentLang, $modal }) => {
  const [visible, setVisible] = useState(false);

  const options = ['ua', 'en'];

  return (
    <LangSwitcherWrapper $modal={$modal}>
      <StyledLink onClick={() => setVisible(true)}>
        <ImSphere size={30} />
        <StyledSpan lang={currentLang}>
          {currentLang === 'en' ? 'En' : 'Ua'}
        </StyledSpan>
        <BsChevronCompactDown />
      </StyledLink>
      {visible && (
        <Dropdown>
          {options
            .filter(option => option !== currentLang)
            .map(option => {
              return (
                <StyledItem
                  key={option}
                  onClick={() => {
                    onChangeLanguage(option);
                    setVisible(false);
                  }}
                >
                  <StyledSpan>{option}</StyledSpan>
                </StyledItem>
              );
            })}
        </Dropdown>
      )}
    </LangSwitcherWrapper>
  );
};
