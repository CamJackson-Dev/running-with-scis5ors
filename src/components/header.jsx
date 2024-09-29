import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ color: "black", WebkitTextStroke: "2px white" }}>
                  {props.data ? (
                    <>
                      {props.data.title.split("5")[0]}
                      <span
                        style={{
                          color: "black",
                          WebkitTextStroke: "1px white",
                          color: "#FF1493",
                        }}
                      >
                        5
                      </span>
                      {props.data.title.split("5")[1]}
                    </>
                  ) : (
                    "Loading"
                  )}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
