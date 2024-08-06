const Footer = () => {
    return (
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h4 className="text-sm font-semibold">PÁGINAS</h4>
              <ul className="list-none text-gray-500">
                <li><a href="planos.html" className="hover:text-white">Sobre</a></li>
                <li><a href="contato.html" className="hover:text-white">Treinos</a></li>
                <li><a href="inscricao.html" className="hover:text-white">Planos</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h4 className="text-sm font-semibold">DADOS DE CONTATO</h4>
              <ul className="list-none text-gray-500">
                <li>personalmatheuslucena@gmail.com.br</li>
                <li>83 99800-9571</li>
                <li>De Seg. à Sex. das 8h às 18h</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h4 className="text-sm font-semibold">REDES SOCIAIS</h4>
              <ul className="list-none">
                <li>
                  <a
                    className="btn btn-outline-secondary btn-sm mb-2 inline-block"
                    href="#"
                    style={{ maxWidth: '140px' }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-secondary btn-sm mb-2 inline-block"
                    href="#"
                    style={{ maxWidth: '140px' }}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-secondary btn-sm mb-2 inline-block"
                    href="#"
                    style={{ maxWidth: '140px' }}
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 text-center text-dark py-3">
          <p className="mb-0">Desenvolvido por Fábio Santiago ©2024.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;