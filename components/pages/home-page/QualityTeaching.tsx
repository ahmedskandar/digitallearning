import Image from "next/image";

const QualityTeaching = () => {
  return (
    <section className="md:flex">
      <div className="">
        <Image
          className="h-[500px] w-[900px]"
          src={"/images/ChildrenLearningImage.webp"}
          alt=""
          width="1000"
          height="1000"
        />
      </div>
      <div className="flex flex-col justify-center md:-ml-40">
        <p className="text-orange-400 font-bold text-2xl md:text-6xl text-center bg-black md:bg-opacity-60 p-10">
          Quality Teaching, <br /> Any Time, <br /> Everywhere
        </p>
      </div>
    </section>
  );
};

export default QualityTeaching;