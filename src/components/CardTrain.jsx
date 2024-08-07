import { FaWhatsapp } from 'react-icons/fa';

export default function CardTrain() {
    return (
        <>
        <section className="px-6">
            <div id="planos" className="w-full py-5 bg-gray-900 px-6">
                <div className="flex flex-wrap mx-2">
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <div className="bg-gray-700 rounded-lg shadow-lg">
                            <div className="p-6">
                                <h5 className="text-lg font-bold text-white mb-2">Acompanhamento Presencial</h5>
                                <p className="text-gray-300 mb-4">Treino e acompanhamento personalizado</p>
                                <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-500">Conheça</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <div className="bg-gray-700 rounded-lg shadow-lg">
                            <div className="p-6">
                                <h5 className="text-lg font-bold text-white mb-2">Consultoria Online</h5>
                                <p className="text-gray-300 mb-4">Acompanhamento online através do aplicativo "Mfit"</p>
                                <a href="https://www.youtube.com/watch?v=INjHJncwgRc" className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-500 ">Conheça</a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.whatsapp.com/?lang=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
                    >
                        <FaWhatsapp className="text-3xl" />
                    </a>
                </div>
            </div>
        </section>

        <hr className="border-slate-400" />
        </>
    )
}