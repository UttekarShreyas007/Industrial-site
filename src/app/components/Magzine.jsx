import Image from "next/image";
import "./index.css";
import mag1 from "../../../public/assests/Rectangle 24_1.png";
import mag2 from "../../../public/assests/Rectangle 24_2.png";
import mag3 from "../../../public/assests/Rectangle 26.png";
import mag4 from "../../../public/assests/Rectangle 27.png";
import mag5 from "../../../public/assests/Rectangle 28.png";
import mag6 from "../../../public/assests/Rectangle 29.png";

const Magzine = () => {
  const array1 = [mag1, mag2, mag3, mag4, mag5, mag6];
  return (
    <div className="px-40 pt-20 relative overflow-hidden">
      <div className="flex justify-between">
        {array1.map((val, ind) => {
          if (ind === 0) {
            return (
              <div
                key={ind}
                className="relative z-10"
                style={{
                  width: "400px",
                  height: "450px",
                }}
              >
                <Image src={val} alt="magazines" />
              </div>
            );
          } else {
            return (
              <div
                key={ind}
                className="relative z-0"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              >
                <Image src={val} alt="magazines" />
              </div>
            );
          }
        })}
      </div>
      <div className="w-screen bg-red-800 flex items-end justify-evenly p-4 absolute bottom-10 left-0 right-0 z-0">
        <div className="ml-40">
          <h1 className="text-4xl text-white font-semibold">Magazine ad</h1>
          <p className="text-xl text-white font-medium mt-3">
            Magazine Details
          </p>
        </div>
        <button className="bg-gray-300 p-4 font-bold text-3xl rounded-xl ">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Magzine;
