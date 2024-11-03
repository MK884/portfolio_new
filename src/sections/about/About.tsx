import { Loader } from "@/ui";
import { Typewriter } from "react-simple-typewriter";
import style from "./about.module.scss";
import { videoLink } from "@/data";

function About() {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.about}>
          <h4>
            Hi! I'am Khalid, a{" "}
            <span>
              <Typewriter
                words={[
                  "Software Engineer",
                  "Programmer",
                  "Thinker",
                  "Frontend Developer",
                  "Backend Developer",
                  "App Developer",
                ]}
                loop
                cursor
              />
            </span>
          </h4>
          <ul>
            <li>
              <span>
                As an accomplished computer engineer, I have gained significant
                experience in web development in the healthcare sector. I have
                completed my BE in Computer Engineering from AIKTC, Mumbai, in
                2024.
              </span>
            </li>
            <li>
              <span>
                I have 8 months of experience as a full-stack developer intern
                at SoftDigits, where I worked with Codeigniter-4, HTML, and SCSS
                to create user-friendly and responsive web applications.
              </span>
            </li>
            <li>
              <span>
                My primary area of expertise is frontend technologies, and I am
                confident that my experience will be an asset to any
                organization.
              </span>
            </li>
            <li>
              <span>
                My extensive project experience encompasses web and android
                application development. I am now looking to secure a position
                that will allow me to leverage my knowledge and skills and boost
                my learning in a conducive environment.
              </span>
            </li>
          </ul>
        </div>
        <div className={style.video}>
          <div className={style.box}>
            {videoLink ? (
              <video src={videoLink} loop muted controls autoPlay />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
