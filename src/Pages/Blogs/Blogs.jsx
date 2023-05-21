import useTitle from "../../hooks/useTitle";
import Blog from "./Blog";

const Blogs = () => {
  useTitle("Blogs");

  const questionAnswerers = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answerer: "",
    },
    { question: "Compare SQL and NoSQL databases", answerer: "" },
    {
      question: "What is express js? What is Nest JS (google it)?",
      answerer: "",
    },
    {
      question: "What is MongoDB aggregate and how does it work (google it)?",
      answerer: "",
    },
  ];
  return (
    <div className="my-6">
      <h2 className="mb-6 font-sans text-3xl md:text-6xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Question And Answerer Section
      </h2>
      <div className="grid md:grid-cols-2 gap-5 ">
        {questionAnswerers.map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
