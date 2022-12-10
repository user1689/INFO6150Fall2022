import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./index.css";

export default class App extends Component {
    state = {
        pageIdx: 0,
        theme: "light",
        modalOpen: false,
        isLogin: false,
        demoUser: createUser(),
        userList: [],
        loginedUser: null,
        // loginedUser: {
        //     userName: "leo",
        //     passWord: "123123",
        //     email: "leo@gmail.com",
        //     confirmEmail: "leo@gmail.com",
        //     subscribe: true,
        // },
    };
    changePage = (idx) => {
        this.setState({ pageIdx: idx });
    };
    changeTheme = () => {
        const { theme } = this.state;
        if ("light" === theme) {
            this.setState({ theme: "dark" });
        } else {
            this.setState({ theme: "light" });
        }
    };
    toggleModal = () => {
        const { modalOpen } = this.state;
        this.updateDemoUser(
            ["userName", ""],
            ["passWord", ""],
            ["email", ""],
            ["confirmEmail", ""],
            ["subscribe", false]
        );
        this.setState({ modalOpen: !modalOpen });
    };
    updateDemoUser = (...vars) => {
        const { demoUser } = this.state;
        const updatedDemoUser = {
            ...demoUser,
        };
        for (let i = 0; i < vars.length; i++) {
            const key = vars[i][0];
            const value = vars[i][1];
            updatedDemoUser[key] = value;
        }
        this.setState({ demoUser: updatedDemoUser });
    };
    loginHandler = (user) => {
        this.setState({ loginedUser: user });
    };
    subscribeHandler = (event) => {
        const { loginedUser, userList } = this.state;
        const updatedUser = {
            ...loginedUser,
            subscribe: event.target.checked ? true : false,
        };
        userList.forEach((e) => {
            if (e.userName === loginedUser.userName) {
                e.subscribe = event.target.checked;
            }
        });
        this.setState({ loginedUser: updatedUser });
    };
    logoutHandler = () => {
        this.setState({ loginedUser: null });
    };
    storeUser = () => {
        const { demoUser, userList } = this.state;
        const updatedUserList = [...userList, demoUser];
        this.setState({ userList: updatedUserList });
    };
    handleClick = (event) => {
        const key = event.target.id;
        if (key === "id__home") {
            this.changePage(0);
        } else if (key === "id__about") {
            this.changePage(1);
        } else if (key === "id__detail") {
            // detail
            this.changePage(2);
        } else if (key === "id__gallery") {
            // gallery
            this.changePage(3);
        } else if (key === "id__contact") {
            // contact us
            this.changePage(4);
        } else if (key === "id__privacy") {
            // privacy policy
            this.changePage(5);
        } else if (key === "id__game") {
            this.changePage(6);
        }
    };
    render() {
        const { pageIdx, theme, modalOpen, demoUser, loginedUser, userList } =
            this.state;
        return (
            <div id="body" className={`${theme}__body`}>
                <a className={`skiplink ${theme}__background`} href="#main"> Skip to Content </a>
                <Header
                    logoutHandler={this.logoutHandler}
                    subscribeHandler={this.subscribeHandler}
                    userList={userList}
                    loginedUser={loginedUser}
                    loginHandler={this.loginHandler}
                    storeUser={this.storeUser}
                    updateDemoUser={this.updateDemoUser}
                    demoUser={demoUser}
                    toggleModal={this.toggleModal}
                    modalOpen={modalOpen}
                    theme={theme}
                    pageIdx={pageIdx}
                    changePage={this.changePage}
                    changeTheme={this.changeTheme}
                    handleClick={this.handleClick}
                ></Header>
                <Main
                    theme={theme}
                    pageIdx={pageIdx}
                    changePage={this.changePage}
                ></Main>
                <Footer theme={theme} handleClick={this.handleClick}></Footer>
            </div>
        );
    }
}

const createUser = (
    userName = "",
    passWord = "",
    email = "",
    confirmEmail = "",
    subscribe = false
) => {
    return {
        userName,
        passWord,
        email,
        confirmEmail,
        subscribe,
    };
};
