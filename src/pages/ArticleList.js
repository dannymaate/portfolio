import React from "react";
import Template from "../components/Template";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

export default function ArticleList() {
    return (
        <Template title="List of articles">
            <ul>
                {articles.map((article) => (
                    <li>
                        <Link to={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                        <ul>
                            <li>
                                Date: {article.date} 
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </Template>
    );
}