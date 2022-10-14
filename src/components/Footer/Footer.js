import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer__content'>
        <p className="footer__copy">&copy;{new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className='footer__item'>
            <a className='footer__link'
              target='_blank' rel='noopener noreferrer' href='https://github.com/we-cut-the-night'>Github</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link'
              target='_blank' rel='noopener noreferrer' href='https://t.me/ekat_is_an_attitude'>Telegram</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
