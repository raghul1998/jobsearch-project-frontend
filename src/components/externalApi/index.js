import React from "react";
import "./index.css";
class Externalapi extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCni-1L5bJme7ovyvBl4kqDRf8pTgFmgyE&cx=a2d7e8e1b1c854154&q=current%20job%20market%20in%20usa%20for%20students"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json["items"],
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <>
        {items.map(
          (item, index) =>
            index < 3 && (
              <div className="col-xl-4 col-md-6">
                <article>
                  <div className="post-img">
                    <img
                      src={item.pagemap.cse_image[0].src}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Technology</p>

                  <h2 className="title">
                    <a href={item.link}>{item.title}</a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <div className="post-meta">
                      <p className="post-author">{item.displayLink}</p>
                      <p className="post-date">{item.snippet.slice(0, 11)}</p>
                    </div>
                  </div>
                </article>
              </div>
            )
        )}
      </>
    );
  }
}

export default Externalapi;

// <ol key={index}>
//                 test:{index}
//                 title: {item.title}, url: {item.link}, image :{" "}
//                 {item.pagemap.cse_image[0].src}
//               </ol>
