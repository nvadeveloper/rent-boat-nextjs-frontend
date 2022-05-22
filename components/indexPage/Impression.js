

const Impression = () => {
    return (
        <>
            <p className="text-4xl font-extrabold font-montserrat py-6 sm:pt-12 sm:pb-10 mt-10">Впечатления</p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">

                <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                    <p className="text-3xl font-extrabold font-montserrat">Фотосессии</p>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                    <p className="text-3xl font-extrabold font-montserrat">Ночное свидание</p>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                    <p className="text-3xl font-extrabold font-montserrat">Вечеринка</p>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72">
                    <p className="text-3xl font-extrabold font-montserrat">Аквадискотека</p>
                </div>

            </div>

        </>
    )
}

export default Impression