import { useState, useEffect } from "react";

type Fruits = {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  benefits: string[];
};

const Products = () => {
  const [fruits, setFruits] = useState<Fruits[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // Error handling
  //   const fetchFruit = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://6970b63978fec16a63feb110.mockapi.io/fruits",
  //       );
  //       const data: Fruits[] = await res.json();
  //       setFruits(data);
  //     } catch (err) {
  //       console.log(err);
  //       setError("Failed to load products");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // fetch("https://6970b63978fec16a63feb110.mockapi.io/fruits")
  //   //   .then((res) => res.json())
  //   //   .then((data: Fruits[]) => {
  //   //     setFruits(data);
  //   //   });

  //   const timer = setTimeout(() => {
  //     fetchFruit();
  //   }, 1000);
  //   // Cleanup function
  //   return clearTimeout(timer);
  // });

  useEffect(() => {
    const fetchFruit = async () => {
      try {
        const res = await fetch(
          "https://6970b63978fec16a63feb110.mockapi.io/fruits",
        );

        if (!res.ok) {
          throw new Error("API error");
        }

        const data: Fruits[] = await res.json();
        setFruits(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchFruit();
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  // conditional rendering
  if (loading) {
    return <p className="text-center text-xl mt-40">Loading Products...</p>;
  }
  if (error) {
    return <p className="text-center text-xl mt-40">{error}</p>;
  }

  return (
    <>
      <div className="w-full flex flex-col  sm:w-[60vw]  m-auto mt-32 sm:mt-52">
        <h2 className="w-full sm:mt-5 mb-2 text-center text-4xl sm:text-5xl font-semibold text-green-900">
          Featured Products
        </h2>
        <p className="text-center text-lg sm:text-2xl mb-8">
          Shop the freshest selection today.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-9 mt-5">
          {fruits.map((fruit) => {
            return (
              <div
                key={fruit.id}
                className="w-[80vw] h-[60vh] sm:w-[13vw] sm:h-auto bg-white text-center  border border-gray-200 rounded-xl p-2"
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-[30vh] sm:h-[20vh] mb-5 rounded-tl-xl rounded-tr-xl"
                />
                <p className="mb-5 text-lg">{fruit.name}</p>
                <p className="mb-5">Rs - {fruit.price}</p>
                <button className="px-6 py-3 bg-yellow-200 rounded-xl mb-5 cursor-pointer">
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
