import Container from '../components/Container/Container'
import phonebookImage from '../images/funny-phone-book.jpg'

const HomePage = function () {
  return (
    <>
    <Container>
      <img src={phonebookImage} alt='phonebookImage'  className='css.homepage_image'/>
      </Container>
    </>
  );
};

export default HomePage;
