import { useEffect, useState } from "react";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  const [toys, setToys] = useState();
  
  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data.map((element) => element.photoURL));
      });
  }, []);
  console.log(toys);
  return (
    <div className="mt-8">
      <h2 className="mb-6 font-sans text-3xl md:text-6xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Our Gallery
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {toys?.map((img, idx) => (
          <GalleryImg key={idx} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
