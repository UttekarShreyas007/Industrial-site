"use client";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Carousel.css";

const Feature = () => {
  const [featurePosts, setFeaturePosts] = useState([]);
  const [productPosts, setProductPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchFeaturePosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts/Feature"
        );
        const { data } = response;
        console.log(data, "Featured Posts");
        if (Array.isArray(data)) {
          setFeaturePosts(data);
        } else {
          console.log("Invalid data format for Featured Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    const fetchProductPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts/Product"
        );
        const { data } = response;
        console.log(data, "Product Posts");
        if (Array.isArray(data)) {
          setProductPosts(data);
        } else {
          console.log("Invalid data format for Product Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    Promise.all([fetchFeaturePosts(), fetchProductPosts()]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(featurePosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (featurePosts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <main className="mt-20">
      <div className="content">
        <h1 className="text-3xl font-bold text-center mb-10">
          Featured Content
        </h1>
        <div className="carousel">
          <div className="carousel-container" ref={carouselRef}>
            {featurePosts.map((post, index) => (
              <div className="carousel-item" key={index}>
                <img
                  src={post.media[0].fileUrl}
                  alt={post.title}
                  className="image-feature"
                />
                <div className="text mt-10">
                  <h1 className="font-bold text-3xl text-center">{post.title}</h1>
                  <div className="text-center"dangerouslySetInnerHTML={{ __html: post.description }} />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button-left" onClick={scrollLeft}>
            &lt;
          </button>
          <button className="carousel-button-right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      <div className="mt-20 mx-40">
        <div className="products">
          <h1 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h1>
          <div className="bg-gray-300 flex justify-center relative">
            <div className="flex">
              <img src={productPosts[0].media[0].fileUrl} alt="product" />
            </div>
            <div className="text absolute bottom-3 left-3">
              <h1 className="font-bold text-2xl">{productPosts[0].title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: productPosts[0].description,
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {productPosts.map((product) => (
              <div className="text-center" key={product._id}>
                <div className="bg-gray-300 flex items-center justify-center">
                  <img
                    src={product.media[0].fileUrl}
                    alt="products"
                    className="object-contain w-30 h-40"
                  />
                </div>
                <div className="text mt-10">
                  <h1 className="font-bold text-2xl">{product.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
