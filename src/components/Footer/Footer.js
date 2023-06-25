import css from './Footer.module.scss';
import Container from 'components/Container/Container';

const Footer = function () {
  return (
    <footer className={css.footer}>
      <Container>
        <p className={css.footerContent}>Footer content</p>
      </Container>
    </footer>
  );
};

export default Footer;