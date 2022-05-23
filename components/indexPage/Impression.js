import PageHeading from "../elements/PageHeading"


const Impression = () => {
    return (
        <>
            <PageHeading><p className="mt-10">Впечатления</p></PageHeading>

            <div className="flex overflow-x-auto no-scrollbar space-x-8 h-72 pb-4 snap-x">

                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center hover:opacity-60">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>
                
                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center">
                    <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>
            </div>

        </>
    )
}

export default Impression