import React from "react";
import "./Projects.css";

export default function Projects() {
  const callouts = [
    {
      name: "Stellar Network Anchors",
      description: "Payment system using cryptocurrencies",
      imageSrc:
        "https://www.cryptopolitan.com/wp-content/uploads/2019/09/stellar-logo-march-2019.png",
      imageAlt: "Stellar Network logo",
      href: "#",
    },
    {
      name: "Whats App Bot",
      description: "Bot to send messages to a group of people",
      imageSrc:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/whatpsapp-chatbot-2653515.jpg?tf=3840x",
      imageAlt: "Whats App bot",
      href: "#",
    },
    {
      name: "E-commerce site",
      description: "Ecommerce website using wordpress",
      imageSrc:
        "https://arrobasystem.com/cdn/shop/articles/Copy_of_tamano_imagenes_blog_posts_6_960x502_crop_center.png?v=1595441097960w",
      imageAlt: "Ecommerce",
      href: "#",
    },
    {
      name: "Telegram bot",
      description: "Telegram chatbot",
      imageSrc:
        "https://www.lavanguardia.com/andro4all/hero/2021/04/Mejores-bots-Telegram.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      imageAlt: "Telegram bot",
      href: "#",
    },
    {
      name: "REST API's",
      description:
        "Design & Implementation of REST API's using Python with Django/FastAPI",
      imageSrc:
        "https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg",
      imageAlt: "REST API",
      href: "#",
    },
    {
      name: "React website",
      description: "Basic websites using Vite and React",
      imageSrc:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg",
      imageAlt: "React Website",
      href: "#",
    },
  ];
  return (
    <section id="projects" className="flex items-center justify-center">
      <div className="w-8/12">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mt-5 md:mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-16">
              <h2 className="text-3xl text-left font-bold text-gray-900">
                Projects
              </h2>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative mb-4">
                    <div
                      className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                      /* onClick={window.open(
                        "www.google.com",
                        "_blank",
                        "noreferrer"
                      )} */
                    >
                      <a href={callout.href} target="_blank" rel="noreferrer">
                        <img
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-base font-semibold text-gray-900">
                      {callout.name}
                    </p>
                    <h3 className="mt-1 text-sm text-gray-500">
                      <a href={callout.href} target="_blank" rel="noreferrer">
                        <span className="absolute inset-0" />
                        {callout.description}
                      </a>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
