export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">

      <div className="w-[640px] h-[328px] p-8 bg-black rounded-[40px]">
        <h1 className="font-alt text-5xl">Cotação</h1>
      
        <div className="mt-20">
          {/* Parte cotação */}

          <p className="text-2xl">1 Euro igual a</p>
          <p className="text-2xl">5,35 Real Brasileiro</p>

          <div>
            <form>
              <div>

                <input className="w-[96px] h-[48px] bg-black rounded-l-[8px] text-center border-[#5AFB3A] border-l-2 border-t-2 border-b-2 placeholder-[#5AFB3A]"
                type="text" id='valor' placeholder="Valor" />

                <select className="bg-black text-center w-[160px] h-[48px] border-2 border-[#5AFB3A] mt-5"
                 name="deMoeda" id="deMoeda">

                  <option value="">De</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BRL">BRL</option>
                  <option value="IEN">IENE</option>
                </select>

                <select className="bg-black rounded-r-[8px] text-center w-[160px] h-[48px] border-[#5AFB3A] border-r-2 border-t-2 border-b-2"
                 name="paraMoeda" id="deMoeda">

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
