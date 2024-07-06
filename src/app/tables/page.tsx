import TableCard from "@/components/TableCard/TableCard";

const tables = [
    {
        title: 'Table 1',
        isOccupied: true,
    },
    {
        title: 'Table 2',
        isOccupied: false,
    },
    {
        title: 'Table 3',
        isOccupied: true,
    },
    {
        title: 'Table 4',
        isOccupied: false,
    },
];

const Page: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 flex flex-col items-center">
            <div className="container px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Tables</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {tables.map((table, index) => (
                        <TableCard
                            key={index}
                            title={table.title}
                            isOccupied={table.isOccupied}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
