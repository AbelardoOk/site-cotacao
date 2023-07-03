import axios from "axios";
import React, { useEffect, useState } from "react";

export function MostrarPreco({valor, deMoeda, paraMoeda}: {
  valor: number,
  deMoeda: string,
  paraMoeda: string
}) {

const [valorConv, setValorConv] = useState<number>(0);

useEffect(() => {
  try{

    const obterValorConvertido = async (valor: number, deMoeda: string, paraMoeda: string) => {
      try {

        switch (deMoeda) {
          case 'BRL':
            const responseBR = await axios.get(`https://api.exchangerate-api.com/v4/latest/BRL`);
            const exchangeRateBr = responseBR.data.rates;

            const convercaoBr = valor * (exchangeRateBr[paraMoeda] / exchangeRateBr['BRL'])
            setValorConv(convercaoBr)
            break;
        
          case 'USD':
            const responseUs = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
            const exchangeRateUs = responseUs.data.rates;

            const convercaoUs = valor * (exchangeRateUs[paraMoeda] / exchangeRateUs['USD'])
            setValorConv(convercaoUs)
            break;

          case 'EUR':
            const responseEur = await axios.get(`https://api.exchangerate-api.com/v4/latest/EUR`);
            const exchangeRateEur = responseEur.data.rates;
  
            const convercaoEur = valor * (exchangeRateEur[paraMoeda] / exchangeRateEur['EUR'])
            setValorConv(convercaoEur)
            break;

          default:
            break;
        }

      } catch (error) {
        console.error('Erro ao converter moedas: ', error);
        return null;
      }
    }

    document.title = deMoeda
    obterValorConvertido(valor, deMoeda, paraMoeda)

  } catch(error) {
    console.error('Erro: ', error)
  }
}, [valor, deMoeda, paraMoeda])
  

  const nomeMoeda = (paraMoeda: string) => {
    switch (paraMoeda) {
      case "USD":
        return "Dólares Americanos"

      case "EUR":
        return "Euros"

      case "BRL":
        return "Reais Brasileiros"

      default:
        return "";
    }
    }

    return(
      <p className="text-2xl">{valorConv.toFixed(2)} {nomeMoeda(paraMoeda)}</p>
    )

  };


  
export function MostrarMoeda({valor, deMoeda}: {
  valor: number,
  deMoeda: string,
}) {

  const nomeMoeda = (deMoeda: string) => {
    switch (deMoeda) {
      case "USD":
        return "Dólares Americanos"

      case "EUR":
        return "Euros"

      case "BRL":
        return "Reais Brasileiros"

      default:
        return "";
    }
  }

  return(
    <p className="text-2xl">{valor} {nomeMoeda(deMoeda)} igual a</p>
  )
}