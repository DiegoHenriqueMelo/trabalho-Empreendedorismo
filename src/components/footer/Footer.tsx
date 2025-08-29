import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>LOGO</h2>
          <p>Transformando ideias em realidade através do empreendedorismo inovador.</p>
        </div>
        
        <div className="footer-center">
          <div className="footer-links">
            <div className="link-column">
              <h4>Empresa</h4>
              <a href="#">Sobre nós</a>
              <a href="#">Serviços</a>
              <a href="#">Equipe</a>
            </div>
            <div className="link-column">
              <h4>Suporte</h4>
              <a href="#">Contato</a>
              <a href="#">FAQ</a>
              <a href="#">Ajuda</a>
            </div>
          </div>
        </div>
        
        <div className="footer-right">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">t</a>
            <a href="#">in</a>
            <a href="#">ig</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Todos os direitos reservados | Política de Privacidade | Termos de Uso</p>
      </div>
    </footer>
  );
};

export default Footer;