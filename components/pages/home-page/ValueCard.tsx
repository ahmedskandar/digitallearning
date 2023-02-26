import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ValueCardI {
  heading: string;
  paragraph: string;
  background: string;
  text: string;
  animation: string
}

const ValueCard: React.FC<ValueCardI> = ({
  heading,
  paragraph,
  background,
  text,
  animation
}) => {
  const { ref, inView } = useInView();

  const [hasViewed, setHasViewed] = useState(false);

  const className = `h-[500px] relative flex justify-center ${background} bg-opacity-90 ${text} md:w-[100%] md:mx-auto`;

  useEffect(() => {
    if (inView) {
      setHasViewed(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        hasViewed && animation
      } `}
    >
      <div className="w-[80%] mx-aut flex flex-col justify-center gap-10 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">{heading}</h1>
        <p>{inView ? paragraph : "Not in view"}</p>
      </div>
    </div>
  );
};

export default ValueCard;
