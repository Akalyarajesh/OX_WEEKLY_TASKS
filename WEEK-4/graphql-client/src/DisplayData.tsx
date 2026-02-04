import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

type Country = {
  code: string;
  name: string;
  emoji: string;
  phone: string;
  currency: string;
  capital: string;
  languages: {
    name: string;
  }[];
};

type CountriesResponse = {
  countries: Country[];
};

const QUERY_ALL_COUNTRIES = gql`
  query getAllCountries {
    countries {
      code
      name
      emoji
      phone
      currency
      capital
      languages {
        name
      }
    }
  }
`;

const DisplayData = () => {
  const { data, loading, error } =
    useQuery<CountriesResponse>(QUERY_ALL_COUNTRIES);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        Loading countries...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        Failed to load countries
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Countries Directory
        </h1>
        <p className="text-gray-500 mt-1">
          Browse countries and basic information
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.countries.map((country) => (
          <div
            key={country.code}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{country.emoji}</span>
              <h2 className="text-lg font-semibold text-gray-800">
                {country.name}
              </h2>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-700">Capital:</span>{" "}
                {country.capital || "N/A"}
              </p>

              <p>
                <span className="font-medium text-gray-700">Currency:</span>{" "}
                {country.currency || "N/A"}
              </p>

              <p>
                <span className="font-medium text-gray-700">Phone Code:</span> +
                {country.phone}
              </p>

              <p>
                <span className="font-medium text-gray-700">Languages:</span>{" "}
                {country.languages.map((l) => l.name).join(", ") || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;

// import { useQuery } from "@apollo/client/react";
// import { gql } from "@apollo/client";

// type Country = {
//   code: string;
//   name: string;
//   emoji: string;
//   phone: string;
//   currency: string;
//   capital: string;
//   languages: {
//     name: string;
//   }[];
// };

// type CountriesResponse = {
//   countries: Country[];
// };

// const QUERY_ALL_COUNTRIES = gql`
//   query getAllCountries {
//     countries {
//       code
//       name
//       emoji
//       phone
//       currency
//       capital
//       languages {
//         name
//       }
//     }
//   }
// `;

// const DisplayData = () => {
//   const { data, loading, error } =
//     useQuery<CountriesResponse>(QUERY_ALL_COUNTRIES);

//   if (loading) {
//     return <h1>Data is Loading...</h1>;
//   }

//   if (data) console.log(data);

//   if (error) console.log(error);

//   return (
//     <div>
//       {data?.countries.map((country) => (
//         <div key={country.code}>
//           <h2>
//             {country.emoji} {country.name}
//           </h2>
//           <p>Capital: {country.capital}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplayData;

// import { useState } from "react";
// import { useQuery, useLazyQuery } from "@apollo/client/react";

// type CountryResponse = {
//   country: {
//     name: string;
//     emoji: string;
//   };
// };

// const GET_COUNTRY_BY_NAME = gql`
//   query getCountryByName($code: ID!) {
//     country(code: $code) {
//       name
//       emoji
//     }
//   }
// `;
//   const [countrySearched, setCountrySearched] = useState("");
//   const [fetchCountry, { data: countrySearchData, error: countryError }] =
//     useLazyQuery<CountryResponse>(GET_COUNTRY_BY_NAME);
//   if (countryError) console.log(countryError);
/* <div>
        <input
          type="text"
          placeholder="India"
          onChange={(e) => setCountrySearched(e.target.value)}
        />
        <button
          onClick={() =>
            fetchCountry({
              variables: {
                code: countrySearched.toUpperCase(),
              },
            })
          }
        >
          Fetch Data
        </button>
        <div>
          {countrySearchData && (
            <div>
              <h1>Country Name :{countrySearchData.country.name}</h1>
            </div>
          )}
          {countryError && <h1>There was an error fetching data</h1>}
        </div>
      </div> */
