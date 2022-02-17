import React from "react";
//SEO Stuff
import { Helmet } from "react-helmet";
import LandingPage from "../LandingPage";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Meta edge */}
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* Meta description */}
        <meta
          name="description"
          content="Women who have faced any Sexual/Financial/Physical abuse, they can post their happenings on our website without revealing any personal data. Once the details are verified, the post will be published on the website. Furthermore, the action would be taken by the Govt for justice."
        />
        {/*  Keywords */}
        <meta
          name="keywords"
          content="women, Sexual abuse, Financial abuse, Physical abuse, post abuse, without revealing any personal data, the action would be taken by the Govt for justice, Sexual assault,Threatening, Child Sexual Abuse, Marital rape,Incest sexual intrusion between family members,Sexual Exploitaion By Professionals,Body shaming,Threats to publish nude photo's,Stalking,Pornographic images to threaten,Forcing to take part in pornography,Following or Tracking,Threatening to commit suicide,Forcing into prostitution,Sexual touching,Cyberstalking,Trolling,Insulting,Hidden Cameras,Touching in any way you doesn't want,Forcing into sexual acts,Slapping, Beating, Punching, Kicking, Burning, Stabbing,keeping you imprisoned,Sexual Violence Within Prisons,Same Gender Assault,Gang Rape,Destroying immigration papers,Not letting you to see your friends or family,"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div>
        <LandingPage />
      </div>
    </>
  );
};

export default HomePage;
