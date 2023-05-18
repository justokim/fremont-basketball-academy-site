import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Register = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_REGISTER_TEMPLATE_ID;
  const KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [email, setEmail] = useState("");

  const [childname, setChildname] = useState("");
  const [parentname, setParentname] = useState("");
  const [age, setAge] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [grade, setGrade] = useState("");
  const clearForm = () => {
    setAge("");
    setChildname("");
    setParentname("");
    setEmail("");
    setGrade("");
    setPhonenumber("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const body = {
      parentName: parentname,
      email: email,
      childName: childname,
      age: age,
      grade: grade,
      phoneNumber: phonenumber,
    };

    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, body, KEY).then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });

          clearForm();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops, something went wrong",
            text: error.text,
          });
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-5xl mx-auto bg-gray-100 p-4 rounded">
        <h1 className="text-5xl pb-4 text-center">Register</h1>

        <form onSubmit={submitForm} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Email</label>
            <input
              type="email"
              required
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Parent Name</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={parentname}
              onChange={(e) => setParentname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Child Name</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={childname}
              onChange={(e) => setChildname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Age</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Grade</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={grade}
              placeholder="4th grade"
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Phone Number</label>
            <input
              input="tel"
              id="phone"
              name="phone"
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={phonenumber}
              placeholder="xxx-xxx-xxxx"
              onChange={(e) => setPhonenumber(e.target.value)}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>

          <div className="flex justify-between items-center">
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
