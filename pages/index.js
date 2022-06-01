import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import vish from "../public/vish.png";
export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Fremont Basketball Academy</title>
        <meta name="description" content="Fremont Basketball Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto  ">
        <div className="bg-black">
          <video
            autoPlay={true}
            muted
            controls
            playsInline
            loop
            className=" mx-auto w-11/12 h-100 pointer-events-none   object-cover  "
          >
            <source src="/basketball.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <div className=" py-16">
          <h1 className="text-center text-4xl pb-6 ">Class Details</h1>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="text-3xl">Age Requirements</div>
              <ul className="pl-4 ">
                <li>hi</li>
                <li>POTENT</li>
              </ul>
            </div>
            <div className="col-span-1">
              <div className="text-3xl"></div>
            </div>
            <div className="col-span-1">
              <div className="text-3xl">Age Requirments</div>
            </div>
          </div>
        </div> */}
        <div className=" py-16 bg-[#ff9f1c] shadow-md">
          <div className=" text-5xl lg:text-6xl text-center pb-16 font-barlow-200 font-medium  uppercase tracking-tight ">
            We Strive To Be
          </div>
          <div className="  grid grid-cols-1 gap-8 lg:grid lg:grid-cols-3 text-center  font-semibold">
            <div className="col-span-1 text-2xl  ">
              <div className="rounded-xl bg-white  w-1/2 mx-auto p-2">
                Committed
              </div>
            </div>
            <div className="col-span-1 text-2xl">
              <div className="rounded-xl  bg-white   w-1/2 mx-auto p-2 ">
                Structured
              </div>
            </div>
            <div className="col-span-1 text-2xl">
              <div className="rounded-xl  bg-white   w-1/2 mx-auto p-2 ">
                Passionate
              </div>
            </div>
          </div>
        </div>

        <div className=" py-8 mt-10 ">
          <h1 className="text-center  tracking-tight text-6xl pb-6 font-medium font-barlow-200  uppercase  ">
            Meet the Team
          </h1>

          <div className=" grid grid-cols-1 place-items-center place-content-center gap-8 lg:grid lg:grid-cols-3 font-barlow">
            <div className="col-span-1 bg-[#ff9f1c] rounded-xl shadow-lg">
              <div className="text-center text-2xl font-medium">
                Vishrant Prahbu
              </div>
              <div className="relative w-80 h-80 mx-auto  p-8">
                <Image
                  className=""
                  src={vish}
                  alt="coach"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="py-4 text-center  text-xl font-medium ">
                <p>Founder</p>
                <p>Experience: MSJHS Varisity</p>
                <p>Hometown: Fremont, CA</p>
              </div>
            </div>
            <div className="col-span-1 bg-[#ff9f1c] rounded-xl shadow-lg">
              <div className="text-center text-2xl">Dillon Nguyen</div>
              <div className="relative w-80 h-80 mx-auto  p-8">
                <Image
                  className=""
                  src="/../public/Vish-1.jpg"
                  alt="coach"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="py-4 text-center  text-xl font-medium ">
                <p>Teacher</p>
                <p>Experience: MSJHS Varisity</p>
                <p>Hometown: Fremont, CA</p>
              </div>
            </div>
            <div className="col-span-1 bg-[#ff9f1c]  rounded-xl shadow-lg">
              <div className="text-center text-2xl">Tejas Sathesh</div>
              <div className="relative w-80 h-80 mx-auto ">
                <Image
                  className=""
                  src="/../public/tej.jpg"
                  alt="coach"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="py-4 text-center  text-xl font-medium ">
                <p>Teacher</p>
                <p>Experience: MSJHS Varisity</p>
                <p>Hometown: Fremont, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative  h-99 ">
          <Image
            src="/../public/Vish-6.jpg"
            layout="fill"
            objectFit="cover"
            alt="Gomes"
            className="scale-x-flip "
          ></Image>
          <div className="absolute left-10 font-barlow  text-3xl lg:text-4xl font-medium top-24 ">
            All classes are held at
          </div>
          <div className="absolute left-10 top-40 font-barlow  text-5xl lg:text-6xl uppercase font-medium">
            John Gomes Elementary School
          </div>
        </div>
        <div className="">
          <div className="bg-stone-200 py-4 ">
            <h2 className="text-5xl font-barlow text-center pb-8 ">
              Hear What Parents Have to Say
            </h2>
            <div className=" grid grid-cols-1 lg:grid lg:grid-cols-2 w-4/5 mx-auto">
              <div className="cols-span-1 flex flex-col items-center justify-center">
                <div className="text-center lg:w-1/2 lg:mx-auto">
                  Vishrant and Dillon have put together a great initiative to
                  coach kids in basektball. They have been consisitent,
                  organized, flexible, open to feedback, and have kept the sport
                  fun for our 9 year old. Highly reccomend them for a
                  grass-roots approach to learning the nuances of basketball in
                  a small group.
                </div>
                <div className="py-4"> -Nandini V</div>
              </div>

              <div className="grid grid-cols-1 ">
                <div className="cols-span-1 flex flex-col items-center justify-center">
                  <div className="text-center lg:w-1/2 lg:mx-auto">
                    My daughter has been going to basketball classes with coach
                    Vishranth and Dillon. It is a full 60 minutes non-stop
                    workout and I have seen her skills improve every week. I
                    have seen the amount of personal attention each kid gets
                    from the coach. The competitive games at the end of the
                    session helps the kids implement the learnings.
                  </div>
                  <div className="py-4"> -</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24">
          <div className=" grid grid-cols-1 lg:grid lg:grid-cols-2 lg:w-3/5 lg:mx-auto lg:border-4  border-orange-300  py-8  ">
            <div className=" hidden lg:col-span-1 lg:text-5xl lg:font-barlow lg:flex lg:justify-center lg:items-center">
              Ready to Join?
            </div>
            <Link href="/register" passHref>
              <div className="flex justify-center items-center ">
                <button className="border-2 border-orange-300 hover:bg-[#ff9f1c] hover:border-none lg:p-2 p-4 rounded-md font-barlow text-xl font-semibold tracking-wide">
                  {" "}
                  Register Now!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
