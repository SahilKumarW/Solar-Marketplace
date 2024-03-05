import "../styles/Hero.css";
import solar1 from "../Assets/solar8.jpg";
// import solar2 from "../Assets/solar9.jpg";
// import solar3 from "../Assets/solar10.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat flex items-center p-8 border-4 border-white rounded-md`}
      style={{
        backgroundImage: `url(${solar1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white  z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering a Sustainable Future with Solar Energy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Power your life with the sun. Explore our solar products for an
          eco-friendly energy solution.
        </p>

        <a
          href="/products"
          className="bg-[#051d40] hover:bg-[#051d40] text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Explore Our Products
        </a>
      </div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Hero;
