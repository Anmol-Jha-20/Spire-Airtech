function HeroSection() {
  return (
    <section className="relative h-screen bg-black text-white pt-16">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://zecoaircon.com/wp-content/uploads/2023/08/Zeco-Factory-Video.mp4"
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Indian Made, Globally Certified, Universally Installed!
        </h1>
        <p className="text-lg md:text-xl mb-6 font-semibold">
          Zeco Air Management System & Solutions
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full">
          Get Free Consultation
        </button>
        <div className="mt-10 animate-bounce">
          <span className="text-3xl">⬇️</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
