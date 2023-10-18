
const About = () => {
    return (
        <div className="bg-white min-h-screen">
      <header className="bg-blue-500 p-6 text-center">
        <h1 className="text-4xl font-extrabold text-white">E-Tech_Enclave</h1>
      </header>
      <main className="container mx-auto py-8">
        <section className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-800">
            We are a dedicated team of professionals with a passion for delivering high-quality content and services to our audience. Our mission is to provide you with valuable information and resources to meet your needs.
          </p>
        </section>

        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-800">
            At the core of our company are a set of values that guide everything we do:
          </p>
          <ul className="list-disc list-inside text-gray-800 pl-4 mt-2">
            <li>Quality: We are committed to delivering high-quality content and services.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and ethics.</li>
            <li>Innovation: We continuously seek innovative ways to improve and adapt.</li>
            <li>Customer Focus: Your satisfaction is our top priority.</li>
          </ul>
        </section>

        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-800">
            We have a diverse and talented team of professionals who bring their expertise to ensure we meet our goals. Meet the people behind our success.
          </p>
          {/* You can list your team members here with brief descriptions */}
        </section>
      </main>
    </div>
  );
};


export default About;