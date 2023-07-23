import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#C5FAD5] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#AA96DA] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#333333]">Get the latest updates!</span>
          <br />
           Subscribe Us!
          </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8 items-center"
      >
        <span>© 2023 EzBuy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;



// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-[#C5FAD5] text-white">
//       <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#AA96DA] py-7">
//          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
//            <span className="text-[#333333]">Get the latest updates!</span>
//           <br />
//           events and offers
//         </h1>
//         <div>
//           <input
//             type="text"
//             required
//             placeholder="Enter your email..."
//             className="text-gray-800
//                 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
//           />
//           <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
//              Subscribe
//            </button>
//         </div>
//       </div>

//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
//          text-center pt-2 text-gray-400 text-sm pb-8"
//       >
//         <span>© 2020 Becodemy. All rights reserved.</span>
//         <span>Terms · Privacy Policy</span>
//         <div className="sm:block flex items-center justify-center w-full">
//           <img
//             src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;