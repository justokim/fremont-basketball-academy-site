import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (errMsg) setErrMsg("");

    if (email.length == 0 || !email.includes("@")) {
      setErrMsg("You must provide a valid email!");
      return;
    }
    if (subject.length == 0) {
      setErrMsg("You must provide a subject!");
      return;
    }
    if (subject.message == 0) {
      setErrMsg("You must provide a message!");
      return;
    }
  };

  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-5xl mx-auto bg-gray-100 p-4 rounded">
        <h1 className="text-5xl pb-4 text-center">Register</h1>

        <form onSubmit={sendMessage} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Parent Name</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Child Name</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Age</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Grade</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Phone Number</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-red-500 text-lg">*{errMsg}</div>
            <button
              type="submit"
              className="outline-none bg-[#ff9f1c] text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
