import React, { Component } from "react";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import "./NewsPage.css";

const filters = [
  { label: "With photo", value: "photoFilter" },
  { label: "With link", value: "linkFilter" },
  { label: "Special post", value: "specialFilter" },
];
//фильтровать данные новостей при изменении состояния
export default class NewsPage extends Component {
  state = {
    checked: {
      photoFilter: false,
      linkFilter: false,
      specialFilter: false,
    },
    newsData: null,
  };

  componentDidMount() {
    fetch("./news.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((recievedData) => {
        this.setState({ newsData: recievedData });
      })
      .then(() => console.log(this.state.newsData))
      .catch((err) => console.log(err));
  }

  toggleCheck = (value) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [value]: !this.state.checked[value],
      },
    });
  };

  render() {
    const { newsData } = this.state;
    const { photoFilter, linkFilter, specialFilter } = this.state.checked;
    const filteredData = () => {
      return newsData.filter((item) => {
        if (photoFilter && !item.photo) return false;
        if (linkFilter && !item.link) return false;
        if (specialFilter && !item.isSpecial) return false;
        return true;
      });
    };
    return (
      <main id="main">
        <h1 className="main-title">Latest News</h1>
        {filters &&
          filters.map((item, index) => {
            return (
              <NewsFilters
                key={index}
                handlerOnClick={() => this.toggleCheck(item.value)}
              >
                {item.label}
              </NewsFilters>
            );
          })}
        {newsData && <NewsList data={filteredData()} />}
      </main>
    );
  }
}