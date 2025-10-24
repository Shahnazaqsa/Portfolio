import { useState, useEffect } from "react";
import axios from "../api/axios";
function Contact() {
  const [form , setForm] = useState({"name":"" , "email":"", "message":""})
  const [message , setMessage] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      await axios.post("/contact/" , form);
      setMessage("Message sent successfully!");
      setType("success");
      setForm({"name":"" , "email":"", "message":""})
    }catch(err){
      setMessage("Something went Wrong");
      setType("danger");
    }
  }
  return (
  <section id="contact" className="py-20 text-white">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-6 text-cyan-400 text-center">Get in Touch</h2>
    <form onSubmit={handleSubmit} className="space-y-6 bg-cyan-800 p-8 rounded-lg shadow-lg">

  {message && (
    <div
      className={`mb-4 p-4 rounded-lg text-white font-medium ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  )}

  <input
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    type="text"
    placeholder="Your Name"
    className="w-full p-3 rounded-lg border border-cyan-500 bg-cyan-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />

  <input
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    type="email"
    placeholder="Your Email"
    className="w-full p-3 rounded-lg border border-cyan-500 bg-cyan-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />

  <textarea
    value={form.message}
    onChange={(e) => setForm({ ...form, message: e.target.value })}
    placeholder="Your Message"
    rows="5"
    className="w-full p-3 rounded-lg border border-cyan-500 bg-cyan-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
  ></textarea>

  <button className="w-full py-3 rounded-lg bg-cyan-700 hover:bg-cyan-600 transition duration-300 font-semibold text-white">
    Send Message
  </button>
</form>

  </div>
</section>
  );
}

export default Contact;
