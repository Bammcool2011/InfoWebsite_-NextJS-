import React from "react";
import { IconBrandDiscord } from "@tabler/icons-react";
import "../styles/globals.css";

function Home_2() {
  return (
    <section className="h-[12rem] content-center">
      <div className="flex flex-col content-center items-center font-extrabold">
        <h1 className=" font-rubik text-3xl pt-8 ">= SOCIAL MEDIA =</h1>
        <div className="mt-8 hover:scale-125">
          <IconBrandDiscord size={46}></IconBrandDiscord>
        </div>
      </div>
    </section>
  );
}

export default Home_2;
