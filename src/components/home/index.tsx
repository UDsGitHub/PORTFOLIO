type Props = {};

const Home = (props: Props) => {
  return (
    <section
      id="home"
      className="min-h-[100vh] md:h-full flex flex-col justify-center"
    >
      <div>
        <h1 className="text-primary-100 mb-8">Hi, my name is</h1>
      </div>
      <div>
        <h2 className="text-[#ddd9d5]">Udochukwu Amaefule.</h2>
      </div>
      <div>
        <h3 className="text-[#c6c0b9]">I build things for the web.</h3>
      </div>
      <div>
        <p className="mt-5 max-w-[540px] text-xl text-[#7f7467]">
          I'm a software developer focused on building the{" "}
          <span className="text-white">Frontend</span> of Websites and Web
          Applications that leads to the success of the overall product.
        </p>
      </div>
      <div>
        <a
          href="/src/assets/resume.pdf"
          target="_blank"
          className="inline-block w-[max-content] text-sm mt-12 border border-primary-100 py-5 px-7 rounded-md text-primary-100 bg-primary-100 bg-opacity-0 hover:bg-opacity-25 hover:border-white hover:text-white duration-300"
        >
          Resume!
        </a>
      </div>
    </section>
  );
};

export default Home;
