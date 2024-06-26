import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Projects.module.css";
import Card from "../Card";
import Loader from "../Loader";

const Projects = ({ projects, countProjects }) => {
  const [allWorks] = useState([...projects]);
  const [works, setWorks] = useState(allWorks.slice(0, 2) || []);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const fetchMore = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setWorks((prev) => [
          ...prev,
          ...allWorks.slice(works.length, works.length + 2),
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const fetchLess = async () => {
    setWorks(allWorks.slice(0, 2));
    router.push("#projects");
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className={styles.projectsContainer}>
          <div data-aos="fade-up">
            <h2 className="section-heading">
              Just a Little From a Lot of{" "}
              <span className="text-gradient">Projects</span> We Did
            </h2>
            <p className="inext-text section-desc">
              This is just a little projects from what we did, We use divers and
              new web technologies for making stuff, JSES6, React, NextJS, And
              More ...
            </p>
          </div>
          <div className={styles.projectsCards}>
            {works.map((project, index) => (
              <Card aos="fade-up" key={index} project={project} />
            ))}
          </div>
          {isLoading ? (
            <Loader />
          ) : works.length !== countProjects ? (
            <div className={styles.loadMore}>
              <button
                className={`${styles.button} bg-gradient btn-primary`}
                onClick={fetchMore}
              >
                See More
              </button>
            </div>
          ) : (
            <div className={styles.loadMore}>
              <button
                className={`${styles.button} bg-gradient btn-primary`}
                onClick={fetchLess}
              >
                See Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
