import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Sobre nós
          </h1>

          <p className="mt-3 text-gray-600">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/logotipo-restaurante.png"
              alt="Restaurante"
              width={600}
              height={400}
              className="h- [400px] w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Bem-vindo ao Restaurante do Pica-Pau, onde a paixão pela culinária se encontra com a tradição. 
              Fundado em 1995, nosso restaurante tem sido um ponto de encontro para amantes da boa comida e 
              experiências gastronômicas memoráveis.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              Com uma equipe dedicada e talentosa, nos esforçamos para oferecer pratos deliciosos que combinam ingredientes frescos e técnicas culinárias refinadas. 
              Nossa missão é proporcionar aos nossos clientes uma experiência única, onde cada refeição é uma celebração de sabores e aromas. 
              Agradecemos por fazer parte da nossa história e esperamos continuar a servir você com excelência por muitos anos.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Carinho
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
