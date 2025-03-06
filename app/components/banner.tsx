"use client"
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

const Banner: React.FC = () => {
  const speed = 5000;
  // Using a custom CSS property to control the animation speed
  const sectionStyle = { "--speed": `${speed}ms` } as React.CSSProperties;

  return (
    <div className="font-sans text-center relative w-full overflow-hidden h-20">
      <div className="absolute flex">
        {/* Each section will swipe using the custom animation */}
        <section style={sectionStyle} className="flex animate-swipe">
          {images.map(({ id, image }) => (
            <img
              key={id}
              src={image}
              alt={`Banner image ${id}`}
              className="max-w-[150px] h-20 px-[15px] object-cover last:pl-0"
            />
          ))}
        </section>
        <section style={sectionStyle} className="flex animate-swipe">
          {images.map(({ id, image }) => (
            <img
              key={id}
              src={image}
              alt={`Banner image ${id}`}
              className="max-w-[150px] h-20 px-[15px] object-cover last:pl-0"
            />
          ))}
        </section>
        <section style={sectionStyle} className="flex animate-swipe">
          {images.map(({ id, image }) => (
            <img
              key={id}
              src={image}
              alt={`Banner image ${id}`}
              className="max-w-[150px] h-20 px-[15px] object-cover last:pl-0"
            />
          ))}
        </section>
      </div>
      <style jsx>{`
        @keyframes swipe {
          0% {
            transform: translate(0);
          }
          100% {
            transform: translate(-100%);
          }
        }
        .animate-swipe {
          animation: swipe var(--speed) linear infinite backwards;
        }
      `}</style>
    </div>
  );
};

export default Banner;