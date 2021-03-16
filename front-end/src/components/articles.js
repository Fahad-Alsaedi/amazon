import React from "react";
import Article from "./article";
import axios from 'axios';
// import { getAllArticles, deleteArticleByID } from "../api";

class Articles extends React.Component {
  componentDidMount() {
   this.getAllArticles();
  }
  getAllArticles = () => {
    axios
      .get(`http://localhost:4000/articles`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.props.setArticles(response.data.articles);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
      });
  };
  // Make an API Call to Delete an Article
  deleteArticle = (id) => {
    console.log("The Article ID to Delete", id);
    axios
      .delete(`http://localhost:4000/articles/${id}`)
      .then((response) => {
        console.log(`The Article with the ID ${id} has been deleted.`);

        const newArticlesList = this.props.articles.filter((article) => {
          return article._id !== id;
        });

        this.props.setArticles(newArticlesList);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  };
  render() {
    const allArticles = this.props.articles.map((article, index) => {
      return (
        <Article
          title={article.title}
          author={article.author}
          content={article.content}
          id={article._id}
          deleteArticle={this.deleteArticle}
          key={index}
        />
      );
    });

    return (
      <>
        <h3>All Articles</h3>
        {allArticles.length ? allArticles : <h4>No Articles!</h4>}
      </>
    );
  }
}

export default Articles;
