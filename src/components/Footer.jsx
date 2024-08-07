const Footer = () => {
    return (
    <>
    <hr className="border-slate-400" />
    <footer id="contato" className="bg-dark text-white mt-5">
        <div className="py-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/6 px-4 mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-4">PÁGINAS</h4>
              <ul className="list-none text-gray-500">
                <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
                <li><a href="#treinos" className="hover:text-white">Treinos</a></li>
                <li><a href="#planos" className="hover:text-white">Planos</a></li>
              </ul>
            </div>
            <div className="w-full md:w-2/6 px-4 mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-4">DADOS DE CONTATO</h4>
              <ul className="list-none text-gray-500">
                <li>personalmatheuslucena@gmail.com.br</li>
                <li>83 99800-9571</li>
                <li>De Seg. à Sex. das 8h às 18h</li>
              </ul>
            </div>
            <div className="w-full md:w-2/6 px-4">
              <h4 className="text-sm font-semibold mb-4">REDES SOCIAIS</h4>
              <ul className="list-none">
                <li>
                <a href="#" class="inline-block px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 active:bg-gray-200 transition duration-150 ease-in-out">Facebook</a>
                </li>
                <li>
                  <a
                    className="inline-block px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 active:bg-gray-200 transition duration-150 ease-in-out"
                    href="#"
                    style={{ maxWidth: '140px' }}
                    >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 active:bg-gray-200 transition duration-150 ease-in-out"
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
        <div className="bg-gray-500 text-center text-dark py-3 mt-4">
          <p className="mb-0">Desenvolvido por Fábio Santiago ©2024.</p>
        </div>
    </footer>
    </>
    );
  }
  
  export default Footer;