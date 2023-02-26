interface ValueCardI {
    heading: string,
    paragraph: string,
    background: string,
    text: string
}

const ValueCard: React.FC <ValueCardI> = ({heading, paragraph, background, text}) => {
    const className = `h-[500px] flex justify-center ${background} bg-opacity-90 ${text} md:w-[100%] md:mx-auto`;
  return (
    <div className={className}>
      <div className="w-[80%] mx-aut flex flex-col justify-center gap-10 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default ValueCard