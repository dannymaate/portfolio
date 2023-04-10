import React from "react";
import Template from "../components/Template";
import { worklist } from "../data/worklist";
import { ActionAreaCard } from "../components/ActionAreaCard";
import { Link } from "react-router-dom";

export default function Works() {
		return (
        <Template title="works" headerClass="content-heading">
            <div className="works">
                <ul>
                    {worklist.map((work) => (
                        <li>
                            <ActionAreaCard title={ work.title } summary={work.summary}
                            image={ work.image } alt={ work.alt } link={work.link} />
                        </li>
                    ))}
                </ul>
            </div>
        </Template>
    );
}