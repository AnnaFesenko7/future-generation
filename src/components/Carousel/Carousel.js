import { useState, Children } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CarouselSection, CarouselWindow, Content } from './Carousel.styled';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export const Carousel = ({ children }) => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });

  const [offset, setOffset] = useState(0);

  const carouselLength = Children.count(children) - 1;

  const sizeIcon = () => {
    const size = isMobileDevice ? 20 : isDesktopDevice ? 50 : 30;
    return size;
  };

  const handleLeftArrowClick = () => {
    console.log(children);
    setOffset(currentOffset => {
      const newOffset = currentOffset + 100;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - 100;
      const maxOffset = -(100 * carouselLength);
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <CarouselSection>
      <BsArrowLeftCircle
        size={sizeIcon()}
        onClick={handleLeftArrowClick}
        style={{ left: 0 }}
      />
      <CarouselWindow>
        <Content style={{ transform: `translateX(${offset}%)` }}>
          {children}
        </Content>
      </CarouselWindow>
      <BsArrowRightCircle
        size={sizeIcon()}
        onClick={handleRightArrowClick}
        style={{ right: 0 }}
      />
    </CarouselSection>
  );
};
