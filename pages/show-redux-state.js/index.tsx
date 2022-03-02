import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const codeStyle = {
  background: "#ebebeb",
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10,
};

const ShowReduxState = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/clock">
        <a>Go Back Home</a>
      </Link>
    </div>
  );
};

export default ShowReduxState;
