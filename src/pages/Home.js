import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { HomeCarousel } from 'components/HomCarousel/HomCarousel';

const Home = () => {
  return (
    <main>
      <StyledContainer>
        <HomeCarousel />
      </StyledContainer>
    </main>
  );
};

export default Home;
