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
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${deMoeda}`);
        const exchangeRate = response.data.rates;
    
        const convercao = valor * (exchangeRate[paraMoeda] / exchangeRate[deMoeda])
        setValorConv(convercao)

      } catch (error) {
        console.error('Erro ao converter moedas: ', error);
        return null;
      }
    }

    obterValorConvertido(valor, deMoeda, paraMoeda)

  } catch(error) {
    console.error('Erro: ', error)
  }
}, [valor, deMoeda, paraMoeda])
  

  const nomeMoeda = (paraMoeda: string) => {
    switch (paraMoeda) {

      case "nd":
        return "Nenhuma moeda inserida"

      case "USD":
        return "Dólar Americano"

      case "EUR":
        return "Euro"

      case "BRL":
        return "Real Brasileiro"

      case "IENE":
        return "Iene Japonês"

      default:
        return "";
    }
    }

    const simboloMoeda = (paraMoeda: string) => {
      switch (paraMoeda) {
  
        case "nd":
          return "Nenhuma moeda inserida"
  
        case "USD":
          return "U"
  
        case "EUR":
          return "Euro"
  
        case "BRL":
          return "Real Brasileiro"
  
        case "IENE":
          return "Iene Japonês"
  
        default:
          return "";
      }
      }

    return(
      <p className="text-2xl">{valorConv} {nomeMoeda(paraMoeda)}</p>
      // <p className="text-2xl">{valorConv} {nomeMoeda(paraMoeda)}</p>
    )

  };