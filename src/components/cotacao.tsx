import axios from "axios";
import React, { useEffect, useState } from "react";

export function MostrarPreco({valor, deMoeda, paraMoeda}: {
  valor: string,
  deMoeda: string,
  paraMoeda: string
}) {

  const [valorConv, setValorConv] = useState("");

  // const cotacao = async(prop: valores) => {
  //   const apiKey = 'IXFYDMK9H9VON85P';
    
  //   try{
  //   const response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${deMoeda}&to_currency=${paraMoeda}&apikey=${apiKey}`);
  //   const data = response.data['Realtime Currency Exchange Rate'];
  //   const exchangeRate = data['5. Exchange Rate'];
  //   const valorConvertido = parseFloat(exchangeRate) * parseFloat(valor);
  //   return valorConvertido.toFixed(2);

  //   } catch(error) {
  //     throw error;
  //   }
  // };


  useEffect(() => {
    const obterValorConvertido  = async (valor: string, deMoeda: string, paraMoeda: string) => {
    const apiKey = 'IXFYDMK9H9VON85P';

    
    try{
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${deMoeda}&to_currency=${paraMoeda}&apikey=${apiKey}`
      );
    const data = response.data['Realtime Currency Exchange Rate'];
    const exchangeRate = data['5. Exchange Rate'];
    const valorConvertido = (parseFloat(exchangeRate) * parseFloat(valor)).toFixed(2);
    setValorConv(valor)
    
    } catch(error) {
      throw error;
    }
  }; 

  obterValorConvertido(valor, deMoeda, paraMoeda);
  
}, [valor, paraMoeda, deMoeda])


  
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

    return(
      <p className="text-2xl">{valorConv} {nomeMoeda(paraMoeda)}</p>
    )

  };