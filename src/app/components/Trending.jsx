"use client";
import Image from "next/image";
import img1 from "../../../public/assests/image 1.png";
import img2 from "../../../public/assests/Rectangle 18.png";
import img3 from "../../../public/assests/Rectangle 19_1.png";
import img4 from "../../../public/assests/Rectangle 19_2.png";
import img5 from "../../../public/assests/Rectangle 19_0.png";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts/Trending"
        );
        const { data } = response;
        console.log(data, "Trending Posts");
        if (Array.isArray(data)) {
          setTrendingPosts(data);
        } else {
          console.log("Invalid data format for Trending Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    Promise.all([fetchTrendingPosts()]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(trendingPosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (trendingPosts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <main className="my-10">  
      <div>
        <Image src={img1} alt="hero" className="w-full" />
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Trending</h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <div className="left relative">
            <div className="image-container">
              <video
                src={trendingPosts[2].media[0].fileUrl}
                alt="vid"
                className="image0-trend w-full"
                controls
              />
            </div>
            <div className="text absolute bottom-4 left-0 right-0 bg-gray-300 w-1/2 md:w-44 pl-4">
              <h1>{trendingPosts[0].title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: trendingPosts[0].description,
                }}
              />
            </div>
          </div>
          <div className="right flex flex-col justify-between items-start ">
            <div className="flex justify-center gap-5">
              <Image src={img5} alt="vid1" className="image-trend" />
              <div className="text">
                <h1 className="font-bold">Video Blog title</h1>
                <p>Video Blog subtitle</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center gap-5">
              <Image src={img3} alt="vid2" className="image-trend" />
              <div className="text">
                <h1 className="font-bold">Video Blog title</h1>
                <p>Video Blog subtitle</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center gap-5">
              <Image src={img4} alt="vid3" className="image-trend" />
              <div className="text">
                <h1 className="font-bold">Video Blog title</h1>
                <p>Video Blog subtitle</p>
              </div>
            </div>
            <button className="mt-4 bg-gray-300 py-2 px-6 rounded-xl">
              See more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trending;
