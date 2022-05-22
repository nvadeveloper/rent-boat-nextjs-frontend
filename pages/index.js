import Link from "next/link"
import Impression from "../components/indexPage/Impression"


const Index = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">

        <p className="max-w-5xl mx-auto text-center text-4xl sm:text-6xl lg:text-8xl font-extrabold mt-10 mb-36 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-700">Откройте для себя совершенно новое путешествие!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Link href='/boats'>
            <a>
              <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                <p className="text-3xl font-extrabold font-montserrat">Аренда Катра</p>
              </div>
            </a>
          </Link>
          <Link href='/yachts'>
            <a>
              <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                <p className="text-3xl font-extrabold font-montserrat">Аренда Яхты</p>
              </div>
            </a>
          </Link>
          <Link href='/ships'>
            <a>
              <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                <p className="text-3xl font-extrabold font-montserrat">Аренда Тепдохода</p>
              </div>
            </a>
          </Link>
        </div>

        <Impression />
        
      </section>
    </>
  )
}

export default Index
