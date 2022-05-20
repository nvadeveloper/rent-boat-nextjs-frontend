import PageHeading from "../../components/elements/PageHeading"

const Number = ``
const About = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-black">
        <PageHeading>О нас</PageHeading>
        <p>Nautal - ваш посредник для аренды яхт, лидер на рынке Испании. У нас предлагается в аренду более 30 000 судов в 60 странах. Свыше 1 300 000 клиентов пользуются нашими услугами ежегодно.</p>
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading>Контакты</PageHeading>
        <p className="text-xl font-extrabold font-montserrat pb-6">Мы всегда рады обратной связи</p>
        <p>Телефон: <a href="tel:+79911142131" className="text-blue-600 hover:text-blue-500">+79911142131</a></p>
        <p>WhatsApp: <a href="https://wa.me/79911142131" className="text-blue-600 hover:text-blue-500">+79911142131</a></p>
        <p>Телеграм: <a href="https://t.me/nikitaav27" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">@nikitaav27</a></p>
      </section>
    </>
  )
}

export default About
