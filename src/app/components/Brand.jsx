"use client";
import Image from "next/image";
import brand1 from "../../../public/assests/Rectangle 24.png";
import brand2 from "../../../public/assests/Rectangle 25.png";
import brand3 from "../../../public/assests/Rectangle 25_1.png";
import brand4 from "../../../public/assests/Rectangle 25_2.png";
import brand5 from "../../../public/assests/Rectangle 25_3.png";
import brand6 from "../../../public/assests/Rectangle 25_4.png";
import brand7 from "../../../public/assests/Rectangle 25_5.png";
import brand8 from "../../../public/assests/Rectangle 25_6.png";
import brand9 from "../../../public/assests/Rectangle 25_7.png";
import {useState,  useEffect }  from "react";
import axios from "axios";

const Brand = () => {
  const [brandPosts, setBrandPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBrandPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts/Brand"
        );
        const { data } = response;
        console.log(data, "Brand Posts");
        if (Array.isArray(data)) {
          setBrandPosts(data);
        } else {
          console.log("Invalid data format for Brand Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    Promise.all([fetchBrandPosts()]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(brandPosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (brandPosts.length === 0) {
    return <div>No posts available</div>;
  }

  const array2 = [
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  return (
    <main className="mt-10 p-10 bg-red-800">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Brand Focus
      </h1>
      <div className="flex justify-evenly items-center">
        <div>
          <Image src={brand1} alt="brand" width="500" height="100" />
        </div>
        <div className="grid grid-cols-4 gap-x-16 mx-10">
          {brandPosts.map((brand) => (
            <div className="text-center mt-2" key={brand._id}>
              <img src={brand.media[0].fileUrl} alt="products" className=" w-56 h-40" />
              <div className="text mt-1">
                <h1 className="font-semibold text-xl text-white">{brand.title}</h1>
                <div className="text-xs text-white" dangerouslySetInnerHTML={{ __html: brand.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Brand;
