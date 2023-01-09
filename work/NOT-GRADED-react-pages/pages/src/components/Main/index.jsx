import React, { Component } from "react";

import Card from "../Card";
import About from "../About";
import From from "../Form";

import Panels from "../Panels";

import "./index.css";

export default class index extends Component {
    render() {
        const { pageIdx } = this.props;
        let showPage;
        if (pageIdx === 0) {
            showPage = (
                <main>
                    <h2>Home Page</h2>
                    <div class="main__content">
                        <Card changePage={this.props.changePage}></Card>
                        <Card changePage={this.props.changePage}></Card>
                        <Card changePage={this.props.changePage}></Card>
                        <Card changePage={this.props.changePage}></Card>
                    </div>
                </main>
            );
        } else if (pageIdx === 1) {
            showPage = (
                <main>
                    <h2>About Us</h2>
                    <div class="main__content">
                        <About></About>
                    </div>
                </main>
            );
        } else if (pageIdx === 2) {
            showPage = (
                <main>
                    <h2>Join Us</h2>
                    <div class="main__content">
                        <From></From>
                    </div>
                </main>
            );
        } else if (pageIdx === 3) {
            showPage = (
                <main>
                    <h2>Home Page</h2>
                    <div class="main__content">
                        <Panels></Panels>
                    </div>
                </main>
            );
        }
        return showPage;
    }
}
