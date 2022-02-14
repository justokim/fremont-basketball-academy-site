import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Fremont Basketball Academy</title>
        <meta name="description" content="Fremont Basketball Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="bg-red-100 h-96">picture</div>

        <div className="bg-red-200 py-8">
          <h1 className="text-center text-4xl pb-6">Meet the Coaches</h1>

          <div className="lg:grid grid-cols-2">
            <div className="col-span-1 bg-red-400">
              <h1 className="text-center">picture</h1>
              <div className="py-4">
                <p>Coaches can suck myjsildfjal;sdjflkadsjfasdl;kfasjd</p>
              </div>
            </div>
            <div className="col-span-1 bg-green-400">
              <h1 className="text-center">picture</h1>
              <div className="py-4">
                <p>Coaches jasdifjao;sdijf;asdjf;jasd;falksdh suck my dick</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 py-8">
          <div>
            <h1 className="text-center text-4xl tracking-wide pb-6">
              Benefits
            </h1>
          </div>
        </div>

        <div className="bg-blue-200 py-8">
          <div className="">
            <h1 className="text-center text-4xl pb-6">Location</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
