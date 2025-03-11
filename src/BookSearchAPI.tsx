import { useState, useEffect } from "react";

interface BookSearchAPI {
  title: string;
  description: string;
  price?: number;
  image: string;
  infoLink: string;
}

export default function BookSearchAPI() {
  const [bookSearchAPI, setBookSearchAPI] = useState<BookSearchAPI[]>([]);
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  const API =
    "https://www.googleapis.com/books/v1/volumes?q=${query}";

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          //           setBookSearchAPI(data.items);
          //           console.log(data.items);
          //         });
          //     };
          //     fetchData();
          //   }, []);
          if (data.items) {
            setBookSearchAPI(
              data.items.map((item: any) => ({
                title: item.volumeInfo.title || "No title available",
                description:
                  item.volumeInfo.description || "No description available",
                price: item.saleInfo?.listPrice?.amount,
                image:
                  item.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150",
              }))
            );
          }
          console.log(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchData();
  }, [query]);

  const searchBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(inputValue);

    setInputValue("");
  };

  return (
    <section>
      <form onSubmit={searchBook} className="flex justify-center py-20">
        <input
          type="text"
          placeholder="Search for Book..."
          className="bg-white h-12 w-96 pl-3 outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
      {bookSearchAPI.map((bookSearchAPI, index) => (
        <figure key={index} className="flex flex-row bg-amber-100 m-2 p-2">
          <img
            src={bookSearchAPI.volumeInfo.image}
            alt="bookSearchAPI image"
            className="w-100vw h-100vh m-4 p-4"
          />
          <figcaption className="m-4 p-4">
            <strong>{bookSearchAPI.volumeInfo.title}</strong>
            <p>{bookSearchAPI.volumeInfo.description}</p>
            {bookSearchAPI.volumeInfo.price && (
              <p>{bookSearchAPI.volumeInfo.price}</p>
            )}
            {/* <p>{bookSearchAPI.price}</p> */}
            <a href={bookSearchAPI.volumeInfo.infoLink}>InfoLink</a>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
