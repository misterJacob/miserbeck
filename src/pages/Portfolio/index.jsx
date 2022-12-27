import React from "react";

import {
  educationData,
  descriptionPersonal,
  skills,
  experience,
  languages,
  headerData,
} from "./data.portfolio";
import Education from "./educationElement";

const Portfolio = () => {
  const EducationElements = educationData.map((education) => {
    return (
      <Education
        key={education.id}
        title={education.title}
        description={education.description}
        image={education.image}
      />
    );
  });
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Jacob Beck</h1>
        <div className="portfolio-contact-wrapper">
          {/* <div className="portfolio-contact"> */}
          {headerData.map((header, index) => {
            return (
              <div className="portfolio-contact" key={index}>
                {header.contact.map((contact, index) => {
                  return (
                    <div className="items" key={index}>
                      <h3> {contact.divice} </h3>
                      <a
                        className="portfolio-contact-divice"
                        href={contact.href}
                        key={index}
                      >
                        {contact.disti}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* </div> */}
          <div className="sociales">
            {headerData.map((social, index) => {
              return (
                <div className="sociales" key={index}>
                  {social.social.map((social, index) => {
                    return (
                      <a
                        key={index}
                        href={social.href}
                        rel="noreferrer nofollow"
                        target="_blank"
                      >
                        <social.media />
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="section-container">
        <div className="left-colum">
          {descriptionPersonal.map((description, index) => {
            return (
              <div className="personal-descriptiones" key={index}>
                <h2>{description.title}</h2>
                <p>{description.description}</p>
              </div>
            );
          })}
          {skills.map((skill, index) => {
            return (
              <div key={index} className="skills">
                <h3>{skill.title}</h3>
                <ul>
                  {skill.children.map((child, index) => {
                    return (
                      <li key={index}>
                        <p>{child.p}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="underline"></div>

        <div className="right-colum">
          <h2>experiencia laboral</h2>
          {experience.map((experience, index) => {
            return (
              <div className="experience-item" key={index}>
                <h3>{experience.title}</h3>
                <ul>
                  {experience.listItems.map((listItem, index) => {
                    return <li key={index}>{listItem.li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="underline"></div>

        <div className="left-right-colum formation">
          <div className="education">
            <h3>Formacion Academica</h3>
            <ul className="ul">{EducationElements}</ul>
            <ul>
              {languages.map((language, index) => {
                return (
                  <div className="languages" key={index}>
                    <h3> {language.title} </h3>
                    <ul className="lang-ul">
                      {language.children.map((lang, index) => {
                        return (
                          <li className="language" key={index}>
                            {lang.p}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Portfolio;
