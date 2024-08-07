import React from 'react';
import heroImage from '../assets/img/hero.jpeg';

const About = () => {
  return (
    <section id="sobre" className="px-6">
      <div className="text-gray-200 flex flex-wrap lg:flex-nowrap p-6 gap-10">
        <div className="lg:w-6/12 p-2 flex flex-col justify-start">
          <h1 className="text-center text-4xl text-left font-bold text-slate-200 py-3 mb-2 lg:text-6xl">CONHEÇA O SEU PERSONAL TRAINER</h1>
          <p className="mt-4 text-lg text-justify lg:text-2xl lg:mt-16">
            Eu sou Matheus Lucena, e estou aqui para guiá-lo rumo ao seu melhor condicionamento físico.
            Com anos de experiência em treinamento e uma paixão por ajudar as pessoas a alcançarem seus
            objetivos, estou determinado a tornar sua jornada de condicionamento físico emocionante,
            desafiadora e, acima de tudo, eficaz.
          </p>
        </div>
        <div className="lg:w-5/12 p-0 flex justify-center items-center">
          <img className="sm:w-4/6" src={heroImage} alt="Personal Matheus Lucena" />
        </div>
      </div>
    </section>
  );
}

export default About;