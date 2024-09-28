import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-justify">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="text-center">Meet the Team</h2>
          <p>
            At Running with Scis5ors, we are a passionate trio of mental health
            nurses—Kelly, Laura, and Lisa—dedicated to exploring the unknown and
            inspiring others. Our journey across Australia isn't just about
            adventure; it’s about sharing our experiences, insights, and
            encouraging fellow nurses to embrace their own paths. Together,
            we’re committed to breaking the mold and challenging the status quo,
            proving that with courage and determination, we can make a
            difference in both our lives and the lives of those we serve.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 col-sm-6 text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "480px",
                  }}
                >
                  <div
                    className="thumbnail"
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img"
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
