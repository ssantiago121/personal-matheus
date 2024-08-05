import Banner from '../assets/img/banner.png'

export default function Main() {
    return (
        <>
        <section className="">
            <img className="w-full" src={Banner} alt="Foto do Personal Matheus Lucena" />
            <section className="mb-0 rounded-0 text-center bg-dark py-5">
            <hr className="border-slate-400" />
                <div className="m-14 mx-auto max-w-screen-lg p-2 py-5">
                    <h1 className="text-5xl text-slate-200 font-weight-bold">Alcance seu melhor condicionamento</h1>
                    <p className="text-slate-400 p-4">Treinos específico para alcançar os seus objetivos</p>
                    <p className='p-4'>
                        <a href="#planos" class="bg-gray-600 text-white font-bold py-2 px-4 rounded my-2 hover:bg-yellow-500">Escolha seu plano</a>
                    </p>
                </div>
            <hr class="border-slate-400" />
          </section>
        </section>
        </>
    )
};