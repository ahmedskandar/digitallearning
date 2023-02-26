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

  const imageClassName = `md:h-[500px]   md:w-[900px] md:right-[100px] ${
    hasViewed && "qualityTeachingImageAnimation" 
  }`;
  const textClassName = `text-orange-400  font-bold text-2xl md:text-6xl text-center md:bg-opacity-60 md:p-10 md:bg-black md:left-[100px] ${
    hasViewed && "qualityTeachingTextAnimation"
  }`;
  return (
    <section ref={ref} className="relative md:flex">
      <div>
        <Image
          className={imageClassName}
          src={"/images/ChildrenLearningImage.webp"}
          alt=""
          width="1000"
          height="1000"
        />
      </div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center bg-black bg-opacity-50 md:bg-none md:static md:w-auto md:h-auto md:-ml-40">
        <p className={textClassName}>
          Quality Teaching, <br /> Any Time, <br /> Everywhere
        </p>
      </div>
    </section>
  );
};

export default QualityTeaching;
