import React from "react";
import { Container } from "reactstrap";

import Navigation from "../components/Nav";
import Header from "../components/Header";

import IPageProps from "../interfaces/IPageProps";

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="A Blog Blog" headline="Not a Bob Loblaw Law Blog" />
            <Container className="mt-5">Blog content here</Container>
        </Container>
    );
};

export default HomePage;
