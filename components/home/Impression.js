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
                {array.map((item, key) => (
                    <li
                        key={key}
                        className="flex border rounded-xl w-72 sm:w-80 snap-center flex-col">
                        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 h-48 w-full rounded-t-xl"></div>
                        <p className="p-6 pb-14 text-2xl font-bold w-72 sm:w-80">{item.title}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Impression;
