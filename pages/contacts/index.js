import PageHeading from "../../components/elements/PageHeading"


const Contacts = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading>Контакты</PageHeading>
        <p className="text-xl font-extrabold font-montserrat pb-6">Мы всегда рады обратной связи</p>
        <p>Телефон: <a href="tel:+79911111111" className="text-blue-600 hover:text-blue-500">8 991 111-11-11</a></p>
        <p>Телеграм: <a href="https://t.me/nikitaav27" target="_blank" className="text-blue-600 hover:text-blue-500">@nikitaav27</a></p>
      </section>
    </>
  )
}

export default Contacts
