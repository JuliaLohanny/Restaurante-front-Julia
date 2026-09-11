"use client";
import Image from "next/image";

export default function Home() {


  async function cadastrar(e:any){
    e.preventDefault();
    alert("Cadastrado com sucesso!")
  }
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 grid grid-cols gap-4">

      <Image 
      src="/logotipo-restaurante.png"
      alt="Logotipo do Restaurante"
      width={200}
      height={200}
      className=" mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-6">
        Restaurante - do Pica-Pau...
        </h1>


      <input type="text" placeholder="Digite a descricao..."
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <input type="number" placeholder="Digite o preco..."
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <input type="text" placeholder="Digite a categoria..."
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <input type="text" placeholder="O lanche estadisponivel?"
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm tex-gray-900"
      />

      <button 
      onClick={cadastrar}
      className="bg-red-500 hover:bg-red-700 
      text-white font-bold py-2 
      px-4 rounded cursor-pointer"
      >
        Cadastrar
      </button>
    </div>
   </main>
  );
}
