'use client'

import React, { useState } from 'react';
import { MostrarPreco, MostrarMoeda } from '../components/cotacao';

  export default function Home() {
    // React.useStatecria um estado inicial vazio com uma string vazia (''). O valor retornado é uma matriz de dois elementos: o estado atual
    let [valor, setValor] = React.useState<number>(0); 
    let [paraMoeda, setParaMoeda] = React.useState('USD'); 
    let [deMoeda, setDeMoeda] = React.useState('BRL');

  return (

    // Página do site

    <main className="flex items-center justify-center h-screen">

      <div className="w-[640px] h-[328px] p-8 bg-black rounded-[40px]">
        <h1 className="font-alt text-5xl">Cotação</h1>
      
        <div className="mt-20">
          {/* Parte cotação */}
    
          <MostrarMoeda
            valor={valor}
            deMoeda={deMoeda}
          />

          <MostrarPreco
            valor={valor}
            deMoeda={deMoeda}
            paraMoeda={paraMoeda}
          />
          
          {/* Formulário */}
          <div>
            <form>
              <div>

                <input className="w-[96px] h-[48px] bg-black rounded-l-[8px] text-center border-[#5AFB3A] border-l-2 border-t-2 border-b-2 placeholder-[#5AFB3A]"
                type="number" id='valor' placeholder="Valor" value={valor} onChange={(event) => setValor(parseInt(event.target.value, 10))}/>

                <select className="bg-black text-center w-[160px] h-[48px] border-2 border-[#5AFB3A] mt-5 transition-max-height duration-300"
                 name="deMoeda" id="deMoeda" value={deMoeda} onChange={(event) => setDeMoeda(event.target.value)}>

                  <option value="BRL">BRL</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>

                <select className="bg-black rounded-r-[8px] text-center w-[160px] h-[48px] border-[#5AFB3A] border-r-2 border-t-2 border-b-2"
                 name="paraMoeda" id="paraMoeda" value={paraMoeda} onChange={(event) => setParaMoeda(event.target.value)}>

                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BRL">BRL</option>
                </select>

              </div>
            </form>
          </div>

        </div>

      </div>
    </main>
  )
}
