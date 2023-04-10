import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer"

function Template({ title, children, headerClass }) {
    return (
        <>
            <Header></Header>
            <main>
                <h2 className={headerClass}>{title}</h2>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}

Template.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Template;