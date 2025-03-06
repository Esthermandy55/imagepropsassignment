import { useState, useEffect } from "react";

interface BookSearchAPI {
  title: string;
  description: string;
  price?: number;
  image: string;
}

export default function BookSearchAPI() {
  const API =
    "https://www.googleapis.com/books/v1/volumes?q=%22chinua%20achebe%22";
  const [bookSearchAPI, setBookSearchAPI] = useState<BookSearchAPI[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          //           setBookSearchAPI(data);
          //           console.log(data);
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
  }, []);

  return (
    <section>
      {bookSearchAPI.map((bookSearchAPI, index) => (
        <figure key={index} className="flex flex-row bg-amber-100 m-2 p-2">
          <img
            src={bookSearchAPI.image}
            alt="bookSearchAPI image"
            className="w-100vw h-100vh m-4 p-4"
          />
          <figcaption className="m-4 p-4">
            <strong>{bookSearchAPI.title}</strong>
            <p>{bookSearchAPI.description}</p>
            {bookSearchAPI.price && <p>{bookSearchAPI.price}</p>}
            {/* <p>{bookSearchAPI.price}</p> */}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
