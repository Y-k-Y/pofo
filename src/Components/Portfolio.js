import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        // var projectImage = "images/portfolio/" + projects.image;
        var description = projects.description;
        var descriptionList = ``;
        var skills = projects.skills;
        var skillList = ``;

        for (const idx in description) {
          descriptionList += `<li>${description[idx]}</li>`;
        }

        for (const idx in skills) {
          skillList += `<li>${skills[idx]}</li>`;
        }

        return (
          <div key={projects.title} className="portfolio-item">
            <div className="item-wrap">
              <div className="portfolio-item-meta">
                <h3>{projects.title}</h3>
                <p>
                  <em class="date">{projects.period}</em>
                </p>
                <ul dangerouslySetInnerHTML={{__html: descriptionList}}></ul>
                <ul className="skill-wrap" dangerouslySetInnerHTML={{__html: skillList}}></ul>
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
              <div key="etc" className="portfolio-item">
                <div className="item-wrap">
                  <div className="portfolio-item-meta">
                    <h3>그 외 다수의 사이트 개발 및 유지보수</h3>
                    <p>
                      <em class="date">2019.06 ~ 2020.10</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
