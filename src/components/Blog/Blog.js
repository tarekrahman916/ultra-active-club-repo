import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="md:p-10 p-5">
      <div className="title mb-10 ">
        <h2 className="text-3xl mt-5 mb-2">All Blogs</h2>
        <hr className="mx-auto rounded-2xl" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">(1) How Does React Work ?</h2>

          <p className="blog-desc mt-3 mx-10 text-lg font-semibold text-gray-800 text-justify">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
      </div>
      <div>
        <div className="my-10">
          <h2 className="text-3xl">
            (2) What is the difference between state and props in React?
          </h2>

          <p className="blog-desc mt-3 mx-10 text-lg font-semibold text-gray-800 text-justify">
            <span lassName="text-2xl ">props:</span> Props (short for
            properties) are a Component's configuration. They are received from
            above and immutable as far as the Component receiving them is
            concerned. A Component cannot change its props, but it is
            responsible for putting together the props of its child Components.
            Props do not have to just be data -- callback functions may be
            passed in as props.
          </p>
          <p className="blog-desc mt-3 mx-10 text-lg font-semibold text-gray-800 text-justify">
            <span className="text-2xl ">state:</span> The state is a data
            structure that starts with a default value when a Component mounts.
            It may be mutated across time, mostly as a result of user events. In
            other words, the State of a component is an object that holds some
            information that may change over the lifetime of the component.
            <br />
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-3xl">(3) What is useeffect used for ?</h2>

          <p className="blog-desc mt-3 mx-10 text-lg font-semibold text-gray-800 text-justify">
            The useEffect Hook allows you to perform side effects in your
            components. Some examples of side effects are:
            <ul className="font-normal pl-5 list-disc">
              <li>Directly updating the DOM</li>
              <li>Set Timer</li>
              <li>useState Update</li>
              <li>Any Side Effect etc.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
