import PageHeading from "../../components/elements/PageHeading"
import Link from "next/link"


const Index = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading>Катера</PageHeading>
        <Link href='boats/slug'>
          <a className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full">To slug</a>
        </Link>
      </section>
    </>
  )
}

export default Index
