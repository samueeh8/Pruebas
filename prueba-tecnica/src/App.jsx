import { useState, useEffect } from "react";

// const cat_image_url = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`;
const cat_fact = "https://catfact.ninja/fact";
const prefix_img_url = "https://cataas.com/cat/says/";

export default function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(cat_fact)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstThreeWords = fact.split(" ", 3).join(" ");
        console.log(firstThreeWords);

        fetch(
          `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(firstThreeWords);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${prefix_img_url}${imageUrl}`}
          alt={`Image extracted using first three words of ${fact}`}
        />
      )}
    </main>
  );
}
