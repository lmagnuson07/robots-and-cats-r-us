import Image from 'next/image'

function DeveloperCard({name, avatar, manufacturerName, robotUsername, birthCountry, birthCity, birthState, birthDate, price, available, type, ...props}) {
    const variants = {
        available: "text-white bg-blue-700 dark:bg-blue-600",
        unavailable: "text-gray-50 bg-red-800 dark:bg-red-600"
    }
    return ( 
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <header>
                <Image 
                    src={avatar}
                    alt={`Image of the ${name} ${type}`}
                    width={200}
                    height={200}
                    className="mx-auto"
                />
                <h5 className="mb-2 pt-5 px-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </header>
            <dl className="p-5">
                <dt className="sr-only">Manufacturer Name</dt>
                <dd className="mb-3 font-normal text-gray-700 dark:text-gray-400">Manufacturer: {manufacturerName}</dd>

                <dt className="sr-only">Robot Username</dt>
                <dd className="mb-3 font-normal text-gray-700 dark:text-gray-400">Username: {robotUsername}</dd>
                
                <dt className="sr-only">Robot Birth Country - State and City</dt>
                <dd className="font-normal text-gray-700 dark:text-gray-400">{birthCountry} - {birthState}, {birthCity}</dd>

                <dt className="sr-only">Robot Birth Date</dt>
                <dd className="mb-3 font-normal text-gray-700 dark:text-gray-400">Birth Date: {birthDate}</dd>

                <dt className="sr-only">Robot Price</dt>
                <dd className="mb-3 font-normal text-gray-700 dark:text-gray-400">${Number(price / 100).toFixed(2)}</dd>

                <dt className="sr-only">Availability</dt>
                <dd className={`${available ? variants.available : variants.unavailable} mr-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg`}>
                    {available ? "Available" : "Not Available"}
                </dd>
            </dl>
        </article>
    );
}

export default DeveloperCard;