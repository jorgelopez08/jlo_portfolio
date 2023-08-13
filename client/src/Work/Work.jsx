import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <section id="jobs" className="flex items-center justify-center">
      <div className="w-11/12 flex flex-col md:block items-center md:flex-row lg:w-8/12 mt-8 lg:mt-5">
        <div className="text-left sm:py-24 lg:max-w-none lg:py-10">
          <h1 className="font-bold text-3xl md:text-5xl">Experience</h1>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-11/12 md:w-10/12">
              <div className="text-left text-base md:text-2xl ">
                <p className="pt-7 pb-4 md:pb-7 md:pt-5">
                  • Write high performance and maintainable code for different
                  clients.
                </p>
                <p className="pt-7 pb-4 md:pb-7 md:pt-5">
                  • Work with multi-disciplinary teams of engineering, business
                  and clients.
                </p>
                <p className="pt-7 pb-4 md:pb-7 md:pt-5">
                  • Architected and implemented Stellar Receiving Anchor API,
                  which allows to receive cryptocurrencies and disperse payments
                  in fiat currency.
                </p>
                <p className="pt-7 pb-4 md:pb-7 md:pt-5">
                  • Design and implement web services using powerful frameworks.
                </p>
              </div>
            </div>
            <div className="hidden jobs-stack-right md:flex w-2/12 text-center text-ellipsis">
              <h1>W O R K</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
