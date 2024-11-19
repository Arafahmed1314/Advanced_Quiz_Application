/* eslint-disable react/prop-types */
import React from "react";

function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);

  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="block mb-2">
          {label}
        </label>
      )}
      {children}
      {error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

function getChildId(children) {
  // Ensure children is a valid React node
  if (!React.isValidElement(children)) {
    console.warn("Invalid child passed to Field:", children);
    return undefined;
  }

  if ("id" in children.props) {
    return children.props.id;
  }

  return undefined;
}

export default Field;
