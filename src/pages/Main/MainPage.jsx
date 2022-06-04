import React, { useState } from "react";
import "./MainPage.scss";
import Header from "../../components/Header/header";

export default function MainPage(props) {
  let [currTheme, setCurrTheme] = useState("");

  const contentDay = {
    subtitle: "I'm Sadhika, a Senior Product Designer, currently at Shopify.",
    desc: "By day, I work on the Money team, designing the experience for Shopify Balance. I previously led UX for Shopify's Sales Tax and Billing products.",
  };

  const contentNight = {
    subtitle: `I'm Sadhika, a Senior Product Designer, currently at Shopify.`,
    desc: "By night, I'm a doodler and a painter. I also spend my time messing around with code (most recently JS animations) and taking lots of pictures of my dog.",
  };

  const getTheme = async (theme) => {
    await setCurrTheme(theme);
    console.log(currTheme);
  };

  return (
    <div className="mainPage">
      <Header getTheme={getTheme} />
      <div className="mainPage__main">
        {currTheme === "day" ? (
          <div className="mainPage__info">
            <h1 className="mainPage__subtitle">{contentDay.subtitle}</h1>
            <h2 className="mainPage__content">{contentDay.desc}</h2>
        </div>
        ) : (
          <div className="mainPage__info">
            <h1 className="mainPage__subtitle">{contentNight.subtitle}</h1>
            <h2 className="mainPage__content">{contentNight.desc}</h2>
        </div>
        )}
      </div>
    </div>
  );
}
