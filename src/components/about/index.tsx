import Profile from "../../assets/profile.jpg";
import SkillCard from "./SkillCard";

type Props = {};

const About = (props: Props) => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "ASP.NET",
  ];

  return (
    <section
      id="about"
      className="min-h-[100vh] flex flex-col py-[60px] sm:py-[80px] md:py-[100px]"
    >
      <h2>About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* LIFE STORY AND PICTURE */}
        <div>
          {/* LIFE STORY */}
          <div>
            <p className="text-[#7f7467] mb-4">
              Hi there! My name is Udochukwu Amaefule, a self taught web
              developer. I began my journey of web development back in 2021 when
              I decided this would be a useful skill to help my moms new
              business. A few months later, HTML, CSS, and Javascript became
              second nature to me.
            </p>
            <p className="text-[#7f7467] mb-4">
              Attending one hackathon after the other, I discovered new
              technologies and aspects of web development I needed to learn and
              improve upon. Some of these include React, APIs, and backend
              development with ASP.NET
            </p>
            <p className="text-[#7f7467] mb-4">
              I was fortunate enough to have the opportunity to work 2
              internships in the past year, learning more about React,
              Typescript, and ASP.NET whilst helping the companies achieve their
              goals.
            </p>
            <p className="text-[#7f7467] mb-4">
              Here are a few of my skills below:
            </p>
          </div>

          {/* SKILLS */}

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillCard skill={skill} key={skill} />
            ))}
          </div>
        </div>

        {/* PICTURE */}

        <div className="profile-container relative w-[300px] h-[300px] rounded-md">
          <div className="profile-container relative w-[300px] h-[300px] overflow-hidden rounded-md">
            <img
              src={Profile}
              alt="profile photo"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
