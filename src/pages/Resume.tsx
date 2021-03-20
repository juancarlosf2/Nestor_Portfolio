import React, { ReactElement } from "react";

interface Props {}

function Resume(_: Props): ReactElement {
  return (
    <React.Fragment>
      <object
        style={{ width: "100vw", height: "100vh", background: "white" }}
        data="../assets/NestorCorderoResume.pdf"
        type="application/pdf"
        aria-label="PDF"
      ></object>
      <object
        style={{ width: "100vw", height: "100vh" }}
        data="../assets/NestorCorderoResume.pdf"

        type="application/pdf"
      >
        <embed src="../assets/NestorCorderoResume.pdf" type="application/pdf" />
      </object>
    </React.Fragment>
  );
}

export default Resume;
