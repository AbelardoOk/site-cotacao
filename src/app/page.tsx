import axios from 'axios';

  export default function Home() {
  const handleFormSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const valor = (document.getElementById('valor') as HTMLInputElement).value;
    const deMoeda = (document.getElementById('deMoeda') as HTMLSelectElement).value;
    const paraMoeda = (document.getElementById('paraMoeda') as HTMLSelectElement).value;

    const quantidadeMoeda = document.getElementById('qnt-Md') as HTMLSpanElement;
    quantidadeMoeda.innerHTML = valor;

    const moedaAtual = document.getElementById('md-atual') as HTMLSpanElement;
    moedaAtual.innerHTML = deMoeda;

    const moedaEscolhida = document.getElementById('md-escolhida') as HTMLSpanElement;
    moedaEscolhida.innerHTML = paraMoeda;

    try {
      const cotacaoMoeda = document.getElementById('cot-md') as HTMLSpanElement;
      cotacaoMoeda.innerHTML = await cotacao(valor, deMoeda, paraMoeda);
    } catch (error) {
      console.log(error);
    }
  };

    const cotacao = async(valor: string, deMoeda: string, paraMoeda: string) => {
      const apiKey = 'IXFYDMK9H9VON85P';
      
      try{
      const response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${deMoeda}&to_currency=${paraMoeda}&apikey=${apiKey}`);
      const data = response.data['Realtime Currency Exchange Rate'];
      const exchangeRate = data['5. Exchange Rate'];
      const valorConvertido = parseFloat(exchangeRate) * parseFloat(valor);
      return valorConvertido.toFixed(2);

      } catch(error) {
        throw error;
      }
    };

  return (

    // Página do site

    <main className="flex items-center justify-center h-screen">

      <div className="w-[640px] h-[328px] p-8 bg-black rounded-[40px]">
        <h1 className="font-alt text-5xl">Cotação</h1>
      
        <div className="mt-20">
          {/* Parte cotação */}

          <p className="text-2xl"><span id="qnt-md">{valor}</span> <span id="md-atual">{deMoeda}</span> igual a</p>
          <p className="text-2xl"><span id="cot-md">{    uyyyyyyy    }</span> <span id="md-escolhida" >{paraMoeda}</span> Brasileiro</p>

          
          <div>
            <form onSubmit={handleFormSubmit}>
              <div>

                <input className="w-[96px] h-[48px] bg-black rounded-l-[8px] text-center border-[#5AFB3A] border-l-2 border-t-2 border-b-2 placeholder-[#5AFB3A]"
                type="text" id='valor' placeholder="Valor" value={valor} onChange={(event) => setValor(event.target.value)}/>

                <select className="bg-black text-center w-[160px] h-[48px] border-2 border-[#5AFB3A] mt-5 transition-max-height duration-300"
                 name="deMoeda" id="deMoeda">

                  <option value="">De</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BRL">BRL</option>
                  <option value="IEN">IENE</option>
                </select>

                <select className="bg-black rounded-r-[8px] text-center w-[160px] h-[48px] border-[#5AFB3A] border-r-2 border-t-2 border-b-2"
                 name="paraMoeda" id="deMoeda" value={paraMoeda} onChange={(event) => setParaMoeda(event.target.value)}>

                  <option value="">Para</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BRL">BRL</option>
                  <option value="IEN">IENE</option>
                </select>

              </div>
            </form>
          </div>

        </div>

      </div>
    </main>
  )
}
