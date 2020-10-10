import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        var description = projects.description;
        var descriptionList = ``;

        for (const idx in description) {
          descriptionList += description[idx];
        }

        return (
          <div key={projects.title} className="portfolio-item">
            <div className="item-wrap">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>
                    <em class="date">{projects.period}</em>
                  </p>
                  <ul>{descriptionList}</ul>
                </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
