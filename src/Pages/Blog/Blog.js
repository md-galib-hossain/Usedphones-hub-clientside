import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: Local state, Global state, Server state, URL state.
            <br></br>
            <strong>Local (UI) state:</strong> Local state is data we manage in
            one or another component. Local state is most often managed in React
            using the useState hook. For example, local state would be needed to
            show or hide a modal component or to track values for a form
            component, such as form submission, when the form is disabled and
            the values of a form's inputs.
            <br></br>
            <strong>Global (UI) state:</strong> Global state is data we manage
            across multiple components. Global state is necessary when we want
            to get and update data anywhere in our app, or in multiple
            components at least. A common example of global state is
            authenticated user state. If a user is logged into our app, it is
            necessary to get and change their data throughout our application.
            Sometimes state we think should be local might become global.
            <br></br>
            <strong>Server state:</strong> Data that comes from an external
            server that must be integrated with our UI state. Server state is a
            simple concept, but can be hard to manage alongside all of our local
            and global UI state. There are several pieces of state that must be
            managed every time you fetch or update data from an external server,
            including loading and error state. Fortunately there are tools such
            as SWR and React Query that make managing server state much easier.
            <br></br>
            <strong>URL state:</strong> Data that exists on our URLs, including
            the pathname and query parameters. URL state is often missing as a
            category of state, but it is an important one. In many cases, a lot
            of major parts of our application rely upon accessing URL state. Try
            to imagine building a blog without being able to fetch a post based
            off of its slug or id that is located in the URL! There are
            undoubtedly more pieces of state that we could identify, but these
            are the major categories worth focusing on for most applications you
            build.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Prototypical inheritance allows us to reuse the properties or
            methods from one JavaScript object to another through a reference
            pointer function. All JavaScript objects inherit properties and
            methods from a prototype: Date objects inherit from Date.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          What is unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff.
            <br></br>
            They enable you to catch bugs early in the development process.
            Automated unit tests help a great deal with regression testing. They
            detect code smells in your codebase. For example, if you're having a
            hard time writing unit tests for a piece of code, it might be a sign
            that your function is too complex.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            <strong>Angular:</strong>
            Angular is a front-end framework with lots of components, services,
            and tools. On Angular's site, you can see that they define Angular
            as: “The modern web developer's platform” It is developed and
            maintained by Google developers, but curiously it is not used to
            implement any of their most common products such as Search or
            YouTube.
            <br></br>
            <strong>Vue:</strong>
            React is considered a UI library. They define themselves as: “A
            JavaScript library for building user interfaces” Facebook developers
            are behind the development and maintenance of this library. And, in
            this case, most of Facebook's products are made with React.
            <br></br>
            <strong>Angular:</strong>
            Last but not least, Vue.js is, according to its site: “A progressive
            JavaScript framework” Vue.js is developed and led by Evan You, but
            also it counts on a huge open-source community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
