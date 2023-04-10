import React from "react";
import Template from "../components/Template";
import { articles } from "../data/articles";
import MediaCard from "../components/MediaCard";

export default function ArticleList() {
    return (
        <Template title="articles" headerClass="content-heading">
            <div className="works">
                <ul>
                    {articles.map((article) => (
                        <li>
                            <MediaCard image={article.image} alt={article.alt} title={article.title}
                            text={article.description} link={article.link} />
                        </li>
                    ))}
                </ul>
            </div>

        </Template>
    );
}