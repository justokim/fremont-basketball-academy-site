import Image from "next/image";

const About = () => {
  return (
    <div className="py-12 w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-medium text-center">About Us</h1>
        <div className="mt-6 grid grid-cols-2 gap-8 text-center ">
          {" "}
          <div className="col-span-1 text-xl bg-stone-200 p-4 rounded-xl shadow-xl">
            Fremont Basketball Academy was established in June 2020. The goal of
            the academy is to teach children of all ages fundamentals in the
            game of basketball in a fun, engaging manner. We focus on developing
            individual offensive skills like{" "}
            <span className="font-medium">
              shooting, dribbling, and passing
            </span>
            . This structured approach builds confidence in students.{" "}
          </div>
          <div className=" text-xl col-span-1 bg-stone-200 p-4 rounded-xl shadow-xl">
            The academy has experienced tremendous growth with support from the
            community. We have 40 active students who are moving forward in
            developing better technique and skills in every aspect of the game.{" "}
          </div>
        </div>
        <div className="w-1/2 text-center mx-auto mt-6 text-xl bg-stone-200 p-4 rounded-xl shadow-xl">
          Vishrant Prabhu founded the academy in June 2020. With the tremendous
          growth in the academy, we now have 3 coaches who work with the
          children and plan on hiring more soon. All the coaches are motivated
          and have played varsity basketball. They understand what it takes to
          move forward in the game to be able to achieve goals throughout
          elementary, middle and high school.
        </div>
      </div>
      <div className="w-3/4 mx-auto my-6">
        <h6 className="text-center text-5xl font-medium">Meet the Founder</h6>
        <div className="grid grid-cols-2 mt-6 place-items-center">
          <div className="col-span-1  ">
            <div
              className="relative w-80 h-80
            "
            >
              {" "}
              <Image
                alt="founder"
                src="/../public/vish.png"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            Vishrant Prabhu started playing basketball at Gomes elementary
            school. He continued to play basketball throughout his school years
            and played on the varsity team at Mission San Jose High School. He
            founded Fremont Basketball Academy in June 2020 to share skills that
            he had learned with young students within a fun and engaging
            environment.{" "}
          </div>
        </div>
      </div>
      <div className="pt-8 bg-stone-200 h-full">
        <div className="w-3/4 mx-auto">
          {" "}
          “I had a great coach and mentor growing up and wanted to motivate kids
          in a similar way. I played basketball throughout my childhood. The
          game of basketball has taught me valuable skills. Pursuing this game
          has helped build discipline and perseverance. Not only that,
          basketball has allowed me to develop valuable teamwork skills, and
          whether it is a pickup game at the gym or playing in a more structured
          environment elsewhere, the game gives me a lot of joy. I have a lot of
          experience working with kids as a basketball couch and as a summer
          camp counselor. I bring that experience to FBA.”
        </div>
        <a className=" w-3/4 flex justify-end">-Vishrant</a>
      </div>
    </div>
  );
};

export default About;
