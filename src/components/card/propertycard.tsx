import Image from 'next/image';

interface PropertyCardProps {
  property: {
    id: number;
    price: string;
    status: string;
    mls: string;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    lotSqft: number;
    built: number;
    description: string;
    images: string[];
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg border-1.5 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col h-full min-h-[400px]">
      <div className="relative cursor-pointer flex-shrink-0">
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={property.images[0]}
            alt="Property Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-5 left-5 bg-green-500 text-white text-xs px-2 py-1">{property.status}</div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{property.price}</h2>
        <span className="text-gray-600 dark:text-gray-300 text-sm">
          <span className="font-semibold">Address: </span>{property.address}
        </span>
        <div className="mb-1 text-xs text-gray-600 dark:text-gray-400">{property.mls}</div>
        <div className="flex items-center mb-1 text-sm">
          <svg
            className="w-4 h-4 text-indigo-700 dark:text-indigo-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <span className="font-semibold">Details: </span>
          <span className="ml-1 text-gray-600 dark:text-gray-300">
            {property.beds} Beds | {property.baths} Baths | {property.sqft} SqFt
          </span>
        </div>
        <div className="flex items-center mb-1 text-sm">
          <svg
            className="w-4 h-4 text-indigo-700 dark:text-indigo-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span className="font-semibold">Lot: </span>
          <span className="ml-1 text-gray-600 dark:text-gray-300">{property.lotSqft} SqFt</span>
        </div>
        <div className="flex items-center mb-1 text-sm">
          <svg
            className="w-4 h-4 text-indigo-700 dark:text-indigo-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 17v4m-2-2h4M9 7l3-3 3 3M9 11h6m2 4h4m-4 4h4M4 3v18h18V3H4z"
            />
          </svg>
          <span className="font-semibold">Built: </span>
          <span className="ml-1 text-gray-600 dark:text-gray-300">{property.built}</span>
        </div>
        <div className="flex items-start mb-4 text-sm">
          <svg
            className="w-10 h-4 text-indigo-700 dark:text-indigo-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <div>
            <span className="font-semibold">Description: </span>
            <span className="ml-1 text-gray-600 dark:text-gray-300">{property.description}</span>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <a
            href="https://search.mlslistings.com/Matrix/Public/Portal.aspx?ID=DE-100055562129&L=1&eml=c2hvaGlkZWVAZ21haWwuY29t#1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring w-full text-center rounded-b-lg text-xs font-bold text-blue-600 dark:text-blue-400 transition-colors group-hover:text-white hover:bg-blue-600 hover:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
