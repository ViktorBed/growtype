const SubscribeSection = () => (
  <div className="bg-black py-8 md:py-16">
    <div className="container mx-auto py-4 px-4 md:flex">
      <div className="md:w-7/12 lg:w-8/12">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Want tips & tricks to optimize your flow?
        </h2>
        <p className="text-white mt-2">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div className="md:w-5/12 lg:w-4/12">
        <form className="flex my-6">
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-md px-3 ss:grow"
          />
          <button
            type="submit"
            className="bg-green text-black px-6 ss:px-9 py-3 rounded-md"
          >
            Notify Me
          </button>
        </form>
        <p className="text-white">
          We care bout the protection of your data. Read our
          <br />
          <a href="#!" className="text-green">
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default SubscribeSection;
