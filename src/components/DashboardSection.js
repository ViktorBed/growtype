import laptop from "../assets/laptop.png";

const DashboardSection = () => (
  <div className="container mx-auto py-8 px-4 md:py-16">
    <div className="flex flex-col md:flex-row md:items-center">
      <img src={laptop} alt="Laptop" className="mx-16" />
      <div>
        <p className="text-green font-bold uppercase">
          DATA ANALYTICS DASHBOARD
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Manage Data Analytics Centrally
        </h2>
        <p className="text-sm leading-6 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <a
          href="#!"
          className="inline-block text-green bg-black hover:bg-gray-800 px-14 py-3 rounded-md my-6"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
);

export default DashboardSection;
