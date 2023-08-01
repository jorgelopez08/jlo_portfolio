import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <section id="jobs" className="flex items-center justify-center">
      <div className="w-8/12">
        <div className="text-left sm:py-24 lg:max-w-none lg:py-16">
          <h1 className="font-bold">Experience</h1>
        </div>
        <div className="">
          <div className="flex">
            <div className="w-10/12">
              <div className="text-left text-2xl ">
                <p className="pt-4 pb-9">
                  • Write high performance and maintainable code for different
                  clients.
                </p>
                <p className="pt-4 pb-9">
                  • Work with multi-disciplinary teams of engineering, business
                  and clients.
                </p>
                <p className="pt-4 pb-9">
                  • Architected and implemented Stellar Receiving Anchor API,
                  which allows to receive cryptocurrencies and disperse payments
                  in fiat.
                </p>
                <p className="pt-4 pb-9">
                  • Design and implement web services using powerful frameworks.
                </p>
              </div>
            </div>
            <div className="jobs-stack-right flex w-2/12 text-center text-ellipsis">
              <h1>W O R K</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
