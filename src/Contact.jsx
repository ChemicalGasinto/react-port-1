function Contact() {
  return (
    <section id="contact" className="p-10 md:p-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded"
          required
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 cursor-pointer">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
