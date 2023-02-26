import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Projects = () => {
  const { ref: h1ref, inView: inView1 } = useInView();
  const { ref: h2ref, inView: inView2 } = useInView();
  const { ref: h3ref, inView: inView3 } = useInView();
  const { ref: h4ref, inView: inView4 } = useInView();

  const [hasViewed1, setHasViewed1] = useState(false);
  const [hasViewed2, setHasViewed2] = useState(false);
  const [hasViewed3, setHasViewed3] = useState(false);
  const [hasViewed4, setHasViewed4] = useState(false);

  // useEffect(() => {
  //   if (inView1) {
  //     setHasViewed1(true);
  //   } else if (inView2) {
  //     setHasViewed2(true);
  //   } else if(inView3) {
  //     setHasViewed3(true)
  //   } else if (inView4) {
  //     setHasViewed4(true)
  //   }
  // }, [inView1, inView2, inView3, inView4]);
   useEffect(() => {
     if (inView1) {
       setHasViewed1(true);
     } 
   }, [inView1]);

   useEffect(() => {
     if (inView2) {
       setHasViewed2(true);
     } 
   }, [inView2]);

   useEffect(() => {
     if (inView3) {
       setHasViewed3(true);
     } 
   }, [inView3]);

   useEffect(() => {
     if (inView4) {
       setHasViewed4(true);
     } 
   }, [inView4]);


  const hClassName = `font-bold text-blacky text-4xl ${
    hasViewed1 && "projectsAnimation"
  }`;
 
  const hClassName2 = `font-bold text-blacky text-4xl ${
    hasViewed2 && "projectsAnimation"
  }`;

  const hClassName3 = `font-bold text-blacky text-4xl ${
    hasViewed3 && "projectsAnimation"
  }`;

  const hClassName4 = `font-bold text-blacky text-4xl ${
    hasViewed4 && "projectsAnimation"
  }`;

  return (
    <section className="md:flex">
      <div className="text-center sticky top-0 z-10 bg-black border-b md:border-none md:static md:w-1/2">
        <h1
          className="text-orange-400 p-5 text-3xl font-bold
         md:bg-black md:m-0 md:text-orange-400 md:sticky md:top-[45%]  
         md:mt-20 md:text-7xl"
        >
          PROJECTS
        </h1>
      </div>
      <div className="md:w-1/2 bg-[#e3e3e3] p-1">
        <div className="w-[80%] mx-auto my-10">
          <h1 ref={h1ref} className={hClassName}>
            01 <br /> ALLIANCE FOR A GREEN REVOLUTION IN AFRICA (AGRA)
          </h1>
          <hr className="my-10 border border-gray-400" />
          <p>
            Animated videos for use in training of farmers across Africa on good
            agronomic practices of different crops. The animations will be a mix
            of 2D and 3D animations, which will be produced primarily in English
            and then translated into languages spoken throughout Africa such as
            Kiswahili, French and Portuguese. <br /> <br /> The animations will
            serve as a means to support Village Based Advisors (VBAs) conduct
            training to farmers as they better illustrate concepts to farmers.
          </p>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <h1 ref={h2ref} className={hClassName2}>
            02 <br /> GIZ (AGRA)
          </h1>
          <hr className="my-10 border border-gray-400" />
          <p>
            GIZ Nairobi Office awarded the Digital Learning Unit a consultancy
            contract to develop web-based tools for blended learning under the
            Access and Benefit Sharing (ABS) Capacity Development Initiative.
            The aim is to extend the current face-to-face course into a blended
            learning course, combining both online and offline phases. <br />
            <br /> The development of web-based tools for blended learning for
            training will make the course more attractive and effective in
            reaching the target audiences mainly lawyers with accessibility both
            nationally and regionally across Africa. Further, an alumni portal
            will be developed using appropriate tools to ensure long-term
            learning and exchange amongst colleagues who take the course
          </p>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <h1 ref={h3ref} className={hClassName3}>
            03 <br /> FARM INPUT PROMOTIOMS AFRICA (FIPS-AFRICA)
          </h1>
          <hr className="my-10 border border-gray-400" />
          <p>
            The Digital Learning Unit was awarded another consultancy contract
            where we would develop animated instructional videos for use in
            educating farmers on good farming practices. The animations target
            smallholder farmers, primarily in Kenya but potentially other
            countries in Sub-Saharan Africa, with the aim of helping them
            understand their constraints and best practices they can adopt to
            improve and double farm production. <br />
            <br /> Moreover, the animations will inspire and motivate farmers to
            adopt the more advanced farming practices. The animations will also
            be used by people who train farmers such as FIPS staff, County
            Extension Officers and people selling inputs related to the
            technologies (service providers or agro-dealers).
          </p>
        </div>
        <div className="w-[80%] mx-auto my-10">
          <h1 ref={h4ref} className={hClassName4}>
            04 <br /> MOBILE LEARNING
          </h1>
          <hr className="my-10 border border-gray-400" />
          <p>
            This collaboration with Castalia Co. Ltd Japan. We carried out a
            pilot on a mobile learning platform created by Castalia at
            Strathmore University for MSc. MTI and MSc. ISS programme with
            content developed by @iLabAfrica. <br /> <br /> We are currently
            working on an MOU with Castalia to guide further engagements and
            collaboration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
