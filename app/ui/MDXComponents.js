import React from "react";

const H1 = (props) => <h1 className="text-7xl" {...props} />;
const H2 = (props) => <h2 className="text-3xl" {...props} />;

// Add more custom styled components as needed

const MDXComponents = {
  h1: H1,
  h2: H2,
  // Map other HTML tags to custom styled components
};

export default MDXComponents;
