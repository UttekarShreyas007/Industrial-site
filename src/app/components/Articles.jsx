"use client";
import Image from "next/image";
import article1 from "../../../public/assests/Rectangle 31.png";
import article2 from "../../../public/assests/Rectangle 32.png";
import article3 from "../../../public/assests/Rectangle 33.png";
import article4 from "../../../public/assests/Rectangle 34.png";
import {useState,  useEffect }  from "react";
import axios from "axios";

const Articles = () => {
  const array1 = [article1, article2, article3, article4, article3, article1];
  const [articlePosts, setArticlePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticlePosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts/Articles"
        );
        const { data } = response;
        console.log(data, "Article Posts");
        if (Array.isArray(data)) {
          setArticlePosts(data);
        } else {
          console.log("Invalid data format for Article Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    Promise.all([fetchArticlePosts()]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(articlePosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (articlePosts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <main className="my-20 mx-40">
      <h1 className="text-4xl font-bold text-center mb-10">Articles</h1>
      <div className="grid grid-cols-3 gap-2 items-start">
        {articlePosts.map((article) => {
          return (
            <div className="relative w-fit" key={article._id}>
              <div className="aspect-w-3 aspect-h-8">
                <img
                  src={article.media[0].fileUrl}
                  alt="products"
                  className="object-cover img-art"
                />
              </div>
              <div className="text-center absolute bottom-0 left-0 right-0 pb-16 pt-5 bg-neutral-900 bg-opacity-50">
                <h1 className="font-semibold text-4xl text-white">
                  {article.title}
                </h1>
                <div className="text-xl mt-5 text-white" dangerouslySetInnerHTML={{ __html: article.description }} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Articles;
