import Image from 'next/image'
import Link from 'next/link';

function RobotCard({id, fullName, avatar, manufacturerName, robotUsername, birthCountry, birthCity, birthState, birthDate, price, available, type, manufacturerEmail, manufacturerPhone, manufacturerWebsite, ...props}) {
    const variants = {
        available: "text-white bg-blue-600",
        unavailable: "text-gray-50 bg-red-800 bg-red-600"
    }
    const isCat = "pt-4";
    return ( 
        <article className="flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.75rem)] border rounded-lg shadow-md bg-gray-800 border-gray-700">
            <Link href={`/robots/${id}`}>
                <div>
                    <header>
                        <Image 
                            src={avatar}
                            alt={`Image of the ${fullName} ${type}`}
                            width={200}
                            height={200}
                            className={`${type==="Cats" ? isCat : ""} mx-auto`}
                        />
                        <h2 className="mb-2 pt-5 px-5 text-2xl text-center font-bold tracking-tight text-white">{fullName}</h2>
                    </header>
                    <dl className="p-5">
                        <dt className="sr-only">Manufacturer Name</dt>
                        <dd className="font-normal text-gray-400"><span className="mr-1 font-bold">Manufacturer:</span>{manufacturerName}</dd>

                        <dt className="sr-only">Manufacturer Email</dt>
                        <dd className="font-normal text-gray-400">{manufacturerWebsite.replace('https://www.', '')}</dd>

                        <dt className="sr-only">Manufacturer Email</dt>
                        <dd className="font-normal text-gray-400">{manufacturerEmail}</dd>

                        <dt className="sr-only">Manufacturer Phone</dt>
                        <dd className="mb-3 font-normal text-gray-400">Phone: {manufacturerPhone}</dd>

                        <dt className="sr-only">Robot Demographics</dt>
                        <dd className="font-bold text-gray-400">Robot Demographics</dd>

                        <dt className={`${type==="Cats" ? "hidden" : ""} sr-only`}>Robot Username</dt>
                        <dd className={`${type==="Cats" ? "hidden" : ""} font-normal text-gray-400`}>Username: {robotUsername}</dd>
                        
                        <dt className="sr-only">Robot Birth Country - State and City</dt>
                        <dd className="font-normal text-gray-400">{birthCountry} - {birthState}, {birthCity}</dd>

                        <dt className="sr-only">Robot Birth Date</dt>
                        <dd className="mb-3 font-normal text-gray-400">Birth Date: {birthDate}</dd>

                        <dt className="sr-only">Robot Price</dt>
                        <dd className="mb-3 font-normal text-gray-400">${Number(price / 100).toFixed(2)}</dd>
                    </dl>
                </div>
                <p className={`${available ? variants.available : variants.unavailable} mx-auto w-fit items-center mb-5 px-3 py-2 text-sm font-medium text-center rounded-lg`}>
                    {available ? "Available" : "Unavailable"}
                </p>
            </Link>
        </article>
    );
}

export default RobotCard;