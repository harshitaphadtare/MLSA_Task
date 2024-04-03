/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FitFolio",
    description:
      "Built user-friendly tracking platform enabling users to monitor daily exercises like running, mindfulness, and walking effortlessly.",
    url: "https://github.com/harshitaphadtare/FitFolio/settings/pages",
  },
  {
    title: "Movie Recommender System (Content Based) ",
    description:
      "Improved user engagement by 20% by analyzing movie attributes and comparing them to user viewing history to suggest relevant films.",
    url: "https://github.com/harshitaphadtare/Moive-Recommender-System",
  },
  {
    title: "Hand Gesture-Controlled Dino Game",
    description:
      "Utilized the CV Zone Hand Tracking Module for real-time hand tracking to control the gameplay",
    url: "https://github.com/harshitaphadtare/dino-game",
  },
  {
    title: "Weather App",
    description:
      "App that gives live updates on the weaather condition throught the world!",
    url: "https://github.com/harshitaphadtare/Weather-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
