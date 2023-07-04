import Image from "next/image";
import logo from "../../../public/assests/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className=" flex flex-col text-left">
            <Image src={logo} alt="logo" width={250} />
            <div className="text-left">
              <h6 className="text-3xl font-bold">About us</h6>
              <hr className="my-3  bg-white" />
              <p>
                Industrial Automation is a monthly magazine published by IED
                Communications since 1980, catering to the factory and process
                automation needs of the industry
              </p>
            </div>
          </div>
          <div className="">
            <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
              Quick links
            </h6>
            <hr className="my-3 w-44 bg-white" />
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Buy FAQ’s
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Subscription
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Magazine
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Add
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Company
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Media Kit
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Advertise
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Payment
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Options
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Contact Us
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
              Advertisements
            </h6>
            <hr className="my-3 w-44 bg-white" />
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Interviews
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Cover Story
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Products
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Editor’s Desk
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Lessons Learned
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <hr className="my-3 w-44 bg-white" />
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                About Us
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Editorial
              </a>
            </p>
            <p className="">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Advisory
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Automation
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Expo
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Privacy
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Careers
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
