import PageHeading from "../../components/elements/PageHeading"


const About = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-black">
        <PageHeading>О нас</PageHeading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading>Контакты</PageHeading>
        <p className="text-xl font-extrabold font-montserrat pb-6">Мы всегда рады обратной связи</p>
        <p>Телефон: <a href="tel:+79911111111" className="text-blue-600 hover:text-blue-500">+79911111111</a></p>
        <p>Телеграм: <a href="https://t.me/nikitaav27" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">@nikitaav27</a></p>
      </section>
    </>
  )
}

export default About
