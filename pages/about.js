import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>Costumes | About</title>
      </Head>

      <main>
        <h1>About</h1>
        <p>
          This is an app to find the latest costume ideas and post your own
          costume creations
        </p>
        <p>Version: 1.0.0</p>
      </main>
    </div>
  );
};

export default AboutPage;
