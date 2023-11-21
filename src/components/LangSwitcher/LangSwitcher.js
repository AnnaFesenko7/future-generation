import { useState, useEffect } from 'react';
import {
  StyledLink,
  StyledSpan,
  Dropdown,
  LangSwitcherWrapper,
  StyledItem,
} from './LangSwitcher.styled';
import { ImSphere } from 'react-icons/im';
import { BsChevronCompactDown } from 'react-icons/bs';

export const LangSwitcher = ({ onChangeLanguage, currentLang }) => {
  const [lang, setLang] = useState(currentLang);
  const [visible, setVisible] = useState(false);

  const options = ['ua', 'en'];

  useEffect(() => {
    onChangeLanguage(lang);
  }, [lang, onChangeLanguage]);

  return (
    <LangSwitcherWrapper>
      <StyledLink onClick={() => setVisible(true)}>
        <ImSphere size={30} />
        <StyledSpan lang={lang}>{lang === 'en' ? 'En' : 'Ua'}</StyledSpan>
        <BsChevronCompactDown />
      </StyledLink>
      {visible && (
        <Dropdown>
          {options
            .filter(option => option !== lang)
            .map(option => {
              return (
                <StyledItem
                  key={option}
                  onClick={() => {
                    setLang(option);
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
