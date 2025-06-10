// src/App.tsx
import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import FormButton from "./components/FormButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VerticalCard"
import MobileWhatsAppFloating from "./components/MobileWhatsAppFloating"
import Footer from "./components/Footer"
import familyBg from "/familia_sofa1.avif"

const PRODUCT_CARDS = [
  {
    title: "Direto Nacional",
    content: (
      <span className="text-gray-700">
        Linha de custo-benefício, com cobertura em todo o território nacional. Ideal para empresas que buscam segurança e economia. <br />
        <strong>Obs:</strong> Todas as linhas podem ser cotadas com no mínimo 3 vidas.<br />
        <ul>
          Cobertura:
          <li>- Hospital Leforte</li>
          <li>- Hospital Villa Lobos</li>
          <li>- Hospital Nipo-Brasileiro</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Clássico",
    content: (
      <span className="text-gray-700">
        Padrão médio, com acesso a alguns hospitais de primeira linha e rede nacional de excelência. Garantia de atendimento completo para sua equipe. <br />
        <strong>Obs:</strong> Todas as linhas são nacionais.
        <ul>
          Cobertura:
          <li>- Hospital Santa Catarina</li>
          <li>- Hospital São Camilo</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Especial",
    content: (
      <span className="text-gray-700">
        Alto padrão, com ampla rede de hospitais e clínicas de referência em todo o país. Benefícios adicionais para maior conforto e qualidade no atendimento. <br />
        <strong>Obs:</strong> Todas as linhas podem ser cotadas com no mínimo 3 vidas.
        <ul>
          Cobertura:
          <li>- Rede Dor</li>
          <li>- Hospital Oswaldo Cruz Paulista</li>
          <li>- Hospital Samaritano</li>
          <li>- Hospital Nove de julho</li>
          <li>- Hospital Infantil Sabará</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Executivo",
    content: (
      <span className="text-gray-700">
        Rede premium e hospitais de primeira linha em nível nacional. Serviços exclusivos para empresas exigentes. <br />
        <strong>Obs:</strong> Todas as linhas são nacionais.
        <ul>
          Cobertura:
          <li>- Hospital Sírio Libanês</li>
          <li>- Hospital Albert Einstein </li>
          <li>- Laboratórios Alta e Fleury</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Prestígio",
    content: (
      <p className="text-gray-700">
        Melhor dos melhores com reembolso diferenciado, cobertura nacional completa e acesso aos melhores hospitais do Brasil. Ideal para quem não abre mão de total liberdade de escolha. <br />
        <strong>Obs:</strong> Todas as linhas podem ser cotadas com no mínimo 3 vidas.
      </p>
    ),
  },
]

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* ─── MOBILE: header over background, form below ─── */}
      <section className="block lg:hidden">
        <div
          className="w-full py-16 px-4 flex items-center min-h-[450px] relative justify-center"
          style={{
            backgroundImage: `url(${familyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="
              text-[#e1763a]
              text-3xl md:text-4xl
              font-bold
              text-center
              leading-tight
            "
          >
            SulAmérica, <br />
            Experiência e preço justo
            <p
              className="
                mt-4
                text-base md:text-lg
                font-normal
                opacity-80
                text-white
              "
            >
              Seu caminho para proteção completa
            </p>
          </div>
        </div>
      </section>

      {/* ─── DESKTOP: one container, background + side-by-side ─── */}
      <PageContainer
        id="home"
        className="
          hidden lg:flex
          py-16 px-4
          flex-row
          justify-center items-center
          gap-x-20
        "
        style={{
          backgroundImage: `url(${familyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="
            text-[#e1763a]
            text-3xl md:text-4xl lg:text-6xl
            font-bold
            text-center lg:text-right
            leading-tight
          "
        >
          SulAmérica, <br />
          Experiência e preço justo
          <p
            className="
              mt-4
              text-base md:text-lg lg:text-2xl
              font-normal
              opacity-80
              text-white
              text-center lg:text-right
            "
          >
            Seu caminho para proteção completa
          </p>
        </div>

        <FormField
          id="name"
          className="
            w-full
            sm:w-3/4
            md:w-1/2
            lg:w-1/4
          "
          name="name"
          value=""
        />
      </PageContainer>

      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="
          bg-[#e1763a]
          text-white
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-4 lg:gap-x-40
        "
      >
        <div className="text-base  md:text-lg lg:text-xl lg:text-right">
          Venha para a Sul-América!
        </div>
        <FormButton
          className="mt-4 lg:mt-0 cursor-pointer bg-gray-100 text-[#e1763a] hover:bg-[#e1763a] hover:text-white"
          mobileScrollTargetId="home2"
          desktopScrollTargetId="home">
          Solicite uma Cotação
        </FormButton>
      </PageContainer>

      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="
          bg-gray-100
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-4 lg:gap-x-40
        "
      >
        <div className="text-base text-[#0e2c70] md:text-lg lg:text-xl lg:text-right">
          Quer Marcar Consultas ou dúvidas sobre seu plano atual? <br className="hidden lg:block" />
          Já é Cliente?
        </div>
        <Button
          id="submit"
          type="submit"
          className="mt-4 lg:mt-0 cursor-pointer hover:scale-[1.01] bg-[#e1763a] text-white hover:bg-orange-500"
          link="https://saude.sulamericaseguros.com.br/empresa/login/"
        >
          Visite a Central de Clientes
        </Button>
      </PageContainer>

      {/* ADVERTISING */}
      <PageContainer
        id="advertising"
        className="
          bg-[#e1763a]
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-8 lg:gap-x-20
        "
      >
        <img
          src="/health.avif"
          alt="consulta"
          className="h-56 sm:h-64 lg:h-80 mx-auto lg:mx-0 rounded"
        />
        <div className="text-white space-y-2 text-base md:text-lg lg:text-xl">
          <div className="font-bold">Por Que Escolher a Sul-América?</div>
          <div>Com mais de 120 anos de experiência, a Sul-América oferece planos de saúde que unem tradição, tecnologia e cuidado humano. Somos reconhecidos pela qualidade no atendimento e pela confiança de milhões de brasileiros.</div>
          <FormButton
            className="mt-4 lg:mt-0 cursor-pointer bg-gray-100 text-[#e1763a] hover:bg-[#e1763a] hover:text-white"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home">
            Solicitar Cotação
          </FormButton>
        </div>
      </PageContainer>

      {/* CATEGORIES */}
      <PageContainer
        id="categories"
        className="
          bg-gray-100
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col
          items-center
        "
      >
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#0e2c70] font-bold mb-8">
          Nossas Categorias de Planos
        </h2>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 text-[#0e2c70]">
          <CategoryCard
            id="category1"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            title="Direto Nacional"
            imageUrl="/micro_empresa.avif"
          >
            <p>
              Linha de custo-benefício, com cobertura em todo o território nacional. Ideal para empresas que buscam segurança e economia. Todas as linhas podem ser cotadas com no mínimo 3 vidas.
            </p>
          </CategoryCard>

          <CategoryCard
            id="category2"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            title="Clássico"
            imageUrl="/corporate.avif"
          >
            <p>
              Padrão médio, com acesso a alguns hospitais de primeira linha e rede nacional de excelência. Garantia de atendimento completo para sua equipe. Todas as linhas são nacionais.
            </p>
          </CategoryCard>

          <CategoryCard
            id="category3"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            title="Especial"
            imageUrl="/big_company.avif"
          >
            <p>
              Alto padrão, com ampla rede de hospitais e clínicas de referência em todo o país. Benefícios adicionais para maior conforto e qualidade no atendimento. Todas as linhas podem ser cotadas com no mínimo 3 vidas.
            </p>
          </CategoryCard>

          <CategoryCard
            id="category4"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            title="Executivo"
            imageUrl="/health1.avif"
          >
            <p>
              Mais alto padrão, com rede premium e hospitais de primeira linha em nível nacional. Serviços exclusivos para empresas exigentes. Todas as linhas são nacionais.
            </p>
          </CategoryCard>

          <CategoryCard
            id="category5"
            mobileScrollTargetId="home2"
            desktopScrollTargetId="home"
            title="Prestígio"
            imageUrl="/health1.avif"
          >
            <p>
              Mesmos benefícios do executivo e com reembolso diferenciado, cobertura nacional completa e acesso aos melhores hospitais do Brasil. Ideal para quem não abre mão de total liberdade de escolha. Todas as linhas podem ser cotadas com no mínimo 3 vidas.
            </p>
          </CategoryCard>
        </div>
      </PageContainer>

      {/* PRODUCTS ACCORDION + IMAGE */}
      <PageContainer
        id="products"
        className="
          bg-[#b4441c]
          py-16 px-4 sm:px-6 lg:px-8 
        "
      >
        {/* constrain width & center */}
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
          {/* 1) Title always on top */}
          <h2
            className="
              text-center lg:text-left
              text-2xl md:text-3xl lg:text-4xl
              text-[#0e2c70] font-bold
            "
          >
            Conheça os Nossos Produtos
          </h2>

          {/* 2) Now your two columns: accordion + image */}
          <div
            className="
              flex flex-col lg:flex-row
              items-stretch justify-center
              gap-y-8 lg:gap-x-40
            "
          >
            {/* Accordion cards */}
            <div className="w-full lg:w-1/2 text-[#0e2c70] grid grid-cols-1 gap-6">
              {PRODUCT_CARDS.map(({ title, content }) => (
                <VerticalCard key={title} title={title}>
                  {content}
                </VerticalCard>
              ))}
            </div>

            {/* Full-height image */}
            <div className="w-full lg:w-1/2 h-[350px] flex justify-center">
              <img
                src="/familia3.avif"
                alt="Detalhes dos produtos"
                className="h-full w-auto object-cover shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      </PageContainer>

      <PageContainer
        id="home2"
        className="block lg:hidden bg-gray-100"
      >
        <div className="px-4 pb-16">
          <FormField
            id="name"
            name="name"
            value=""
            className="
              w-full
              sm:w-3/4
              md:w-1/2
              mx-auto
            "
          />
        </div>
      </PageContainer>

      {/* only shows on mobile */}
      <div className="flex flex-col">
        <MobileWhatsAppFloating />
      </div>

      <Footer />
    </div>
  )
}

export default App
