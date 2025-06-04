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
import { Form } from "react-router-dom"

const PRODUCT_CARDS = [
  {
    title: "SulAmérica Saúde PME (03 a 29 pessoas)",
    content: (
      <p className="text-gray-700">
        Valorize o bem-estar dos seus funcionários e aumente a produtividade da sua empresa. 
        Com o SulAmérica Saúde PME, você oferece cobertura completa, rede nacional 
        de qualidade e serviços que cuidam da saúde física e emocional da sua equipe.
      </p>
    ),
  },
  {
    title: "SulAmérica Saúde PME Mais (30 a 99 pessoas)",
    content: (
      <p className="text-gray-700">
        Para empresas que querem ir além no cuidado com seus colaboradores. 
        O SulAmérica Saúde PME Mais oferece planos personalizados, maior flexibilidade 
        de escolha e benefícios que valorizam quem faz seu negócio crescer.
      </p>
    ),
  },
  {
    title: "SulAmérica Saúde Empresarial (a partir de 100 pessoas)",
    content: (
      <p className="text-gray-700">
        Grandes empresas precisam de grandes soluções. 
        O SulAmérica Saúde Empresarial garante ampla cobertura, 
        opções de reembolso e acesso aos melhores hospitais e profissionais, 
        reforçando o compromisso da sua empresa com a saúde e o bem-estar.
      </p>
    ),
  },
  {
    title: "SulAmérica Saúde Adesão",
    content: (
      <p className="text-gray-700">
        Para profissionais associados a entidades de classe, 
        o SulAmérica Saúde Adesão oferece planos coletivos 
        com excelente custo-benefício. Conte com a qualidade SulAmérica 
        e tenha acesso a uma rede premium de atendimento médico.
      </p>
    ),
  },
];


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
            Execência e preço justo
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
          Venha para a SulAmérica!
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
          <div className="font-bold">Por Que Escolher a SulAmérica?</div>
          <div>Com mais de 120 anos de experiência, a SulAmérica oferece planos de saúde que unem tradição, tecnologia e cuidado humano. Somos reconhecidos pela qualidade no atendimento e pela confiança de milhões de brasileiros.</div>
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 text-[#0e2c70] lg:grid-cols-4 gap-6 lg:gap-8">
          <CategoryCard id="category1" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="SulAmérica Saúde PME (03 a 29 pessoas)" imageUrl="/micro_empresa.avif">
            <p>O bem-estar dos funcionários é fundamental para o sucesso da sua empresa. Por isso, conte com SulAmérica Saúde na hora de oferecer assistência e proteção.</p>
          </CategoryCard>
          <CategoryCard id="category2" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="SulAmérica Saúde PME Mais (30 a 99 pessoas)" imageUrl="/corporate.avif">
            <p>O bem-estar dos colaboradores é fundamental para o sucesso da sua empresa. Por isso, conte com SulAmérica Saúde na hora de oferecer assistência e proteção.</p>
            
          </CategoryCard>
          <CategoryCard id="category3" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="SulAmérica Saúde Empresarial (a partir de 100 pessoas)
          " imageUrl="/big_company.avif">
            <p>O bem-estar dos funcionários é fundamental para o sucesso da sua empresa. Por isso, conte com SulAmérica Saúde na hora de oferecer assistência e proteção.</p>
          </CategoryCard>
          <CategoryCard id="category4" mobileScrollTargetId="home2" desktopScrollTargetId="home" title="SulAmérica Saúde Adesão" imageUrl="/health1.avif">
            <p>O seguro saúde coletivo por adesão é oferecido pela SulAmérica para ser comercializado por Administradoras de Benefícios à entidades de caráter profissional, classista ou setorial. Para ter direito a contratar um plano coletivo por adesão, o beneficiário precisa ser associado à uma entidade.
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
          /* remove flex here so children stack by default */
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

            {/* Full‑height image */}
            {/* inside your existing flex */}
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
      <div className="flex flex-col">
      {/* only shows on mobile */}
      <MobileWhatsAppFloating />
    </div>

      <Footer />
    </div>
  )
}

export default App
