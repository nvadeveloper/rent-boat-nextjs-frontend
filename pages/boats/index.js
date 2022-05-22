import PageHeading from "../../components/elements/PageHeading"
import Link from "next/link"

const text = {
  name: 'Challenger 230',
  tag: 'Бинес класс',
  price: '12 000',
  person: '12'
}
const Index = () => {

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading><h1>Катера</h1></PageHeading>
        <Link href='boats/slug'>
          <a className="bg-black hover:bg-gray-600 text-white py-3 px-6 rounded-full ">To slug</a>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">

          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-600">{text.person} человек</p>
              </div>
            </div>
          </div>

          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-600">{text.person} человек</p>
              </div>
            </div>
          </div>


          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-600">{text.person} человек</p>
              </div>
            </div>
          </div>


          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-600">{text.person} человек</p>
              </div>
            </div>
          </div>


          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-600">{text.person} человек</p>
              </div>
            </div>
          </div>


          <div>
            <img  
              className="w-full object-cover h-64"
              src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_7437.jpg'
            />
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold text-xl">{text.name}</p>
                <p className="text-sm text-gray-600">{text.tag}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-900 mt-2">{text.price} руб/час</p>
                <p className="text-sm text-gray-900">{text.person} человек</p>
              </div>
            </div>
          </div>

        </div>
        
      </section>
    </>
  )
}

export default Index
