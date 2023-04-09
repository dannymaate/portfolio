import React from "react";
import Template from "../components/Template";
import { articles } from "../data/articles";
import { useParams } from "react-router-dom";

export default function Article() {
    function Framework({ item }) {
        return (
            <p>
                { item }
            </p>
        );
    }

    let { id } = useParams();
    let [article] = articles.filter((article) => article.id === id);
    if (article === undefined) {
        return (
            <Template title="Article Not Found"></Template>
        );
    }
    
    else {
        let { title, description, date, frameworks, link } = article;
        return (
            <Template title={title}>
                <p className="subtitle">
                    {date}
                </p>
                <p>{description}</p>
                <section className="method">
                    <article>
                        <h3>frameworks</h3>
                        {frameworks.map((framework) => (
                            <Framework {...framework} />
                        ))}
                    </article>
                    <article>
                        <h3>link</h3>
                        <ol>
                            {link}
                        </ol>
                    </article>
                </section>
            </Template>
        );
        
    }
}