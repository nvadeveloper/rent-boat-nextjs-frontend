import PageHeading from '../elements/PageHeading';

const array = [
    {
        title: 'Аквадискотека',
    },
    {
        title: 'Аквадискотека',
    },
    {
        title: 'Аквадискотека',
    },

    {
        title: 'Аквадискотека',
    },
    {
        title: 'Аквадискотека',
    },
];
const Impression = () => {
    return (
        <>
            <PageHeading>
                <p className="mt-10">Впечатления</p>
            </PageHeading>

            <ul className="flex overflow-x-auto no-scrollbar space-x-8 h-72 pb-4 snap-x">
                {array.map((item, i) => (
                    <li
                        className="rounded-2xl bg-gradient-to-r from-cyan-100 to-blue-100 snap-center hover:shadow-md ease-in-out duration-300 "
                        key={i}>
                        <p className="w-72 sm:w-80 p-6 text-3xl font-extrabold font-montserrat">
                            {item.title}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Impression;
