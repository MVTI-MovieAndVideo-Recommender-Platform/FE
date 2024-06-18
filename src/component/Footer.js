import React from "react";

import Logo_aws from "../asset/img/logo-aws.png";
import Logo_fastapi from "../asset/img/logo-fastapi.png";
import Logo_kafka from "../asset/img/logo-kafka.png";
import Logo_rds from "../asset/img/logo-rds.png";
import Logo_react from "../asset/img/logo-react.png";
import Logo_s3 from "../asset/img/logo-s3.png";
//head,foot : app.css

function Footer() {
  return (
    <footer className="bg-white p-3 fixed bottom-0 w-full dark:bg-gray-800 text-black dark:text-white">
        <div className="bg-whited ark:bg-gray-800 mx-auto w-full px-6 lg:px-8">
          <h2 className=" text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
           MVTI Movie & Video to All!
          </h2>
         <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 md:grid-cols-6">
           <img
             className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
             src={Logo_react}
             alt="React"
              width={50}
              height={50}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              src={Logo_fastapi}
              alt="fastAPI"
              width={50}
              height={50}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              src={Logo_s3}
              alt="AmazonS3"
              width={50}
              height={50}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              src={Logo_kafka}
              alt="kafka"
              width={50}
              height={50}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              src={Logo_aws}
              alt="AWS"
              width={50}
              height={50}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              src={Logo_rds}
              alt="RDS"
              width={50}
              height={50}
            />
          </div>
        </div>
   </footer>
  );
}

export default Footer;




//<div className="background_Footer">
//<section>
// <ul className="used_stacks">
//   <li><a className="stack_react"></a></li>
//   <li><a className="stack_B"></a></li>
//  <li><a className="stack_C"></a></li>
//   <li><a className="stack_D"></a></li>
//   </ul>
//<ul className="links">
//   <li><a>About</a></li>
//   <li><a href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform" alt="MVTI_Github!">MVTI_Github</a></li>
//   <li><a>contact</a></li>
//</ul>
//<p className="rightsReserved"> CCL_Team'MVTI'</p>
//</section>
//</div>