function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm John Doe</h2>
      <p className="mt-4 text-lg md:text-2xl">A Passionate React Developer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200"
      >
        View My Work
      </a>
    </section>
  );
}
export default Hero;
