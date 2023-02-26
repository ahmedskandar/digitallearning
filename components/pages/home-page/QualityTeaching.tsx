import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const QualityTeaching = () => {
  const { ref, inView } = useInView();

  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasViewed(true);
    }
  }, [inView]);

  const imageClassName = `h-[500px] w-[900px] ${
    hasViewed && "qualityTeachingImageAnimation"
  }`;
  const textClassName = `text-orange-400 font-bold text-2xl md:text-6xl text-center bg-black md:bg-opacity-60 p-10 ${
    hasViewed && "qualityTeachingTextAnimation"
  }`;
  return (
    <section ref={ref} className="md:flex">
      <div>
        <Image
          className={imageClassName}
          src={"/images/ChildrenLearningImage.webp"}
          alt=""
          width="1000"
          height="1000"
        />
      </div>
      <div className="flex flex-col justify-center md:-ml-40">
        <p className={textClassName}>
          Quality Teaching, <br /> Any Time, <br /> Everywhere
        </p>
      </div>
    </section>
  );
};

export default QualityTeaching;
