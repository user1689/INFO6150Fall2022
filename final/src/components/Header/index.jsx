import React, { Component } from "react";

import "./index.css";

import Icon from "../Icon";
import Modal from "../Modal";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openHome: false,
            openAbout: false,
            openRegister: false,
            openHamburger: false,
            openGallery: false,
            openAccordian1: false,
            openAccordian2: false,
        };
    }
    handleOpen = (event) => {
        const key = event.target.id;
        if (key === "id__home") {
            const { openHome } = this.state;
            this.setState({ openHome: !openHome });
        } else if (key === "id__about") {
            const { openAbout } = this.state;
            this.setState({ openAbout: !openAbout });
        } else if (key === "id__hamburger") {
            const { openHamburger } = this.state;
            this.setState({ openHamburger: !openHamburger });
        }
    };
    openAccordianHandler = (event) => {
        const { openAccordian1, openAccordian2 } = this.state;
        if (event.target.id === "accordian1") {
            this.setState({ openAccordian1: !openAccordian1 });
        } else if (event.target.id === "accordian2") {
            this.setState({ openAccordian2: !openAccordian2 });
        }
    };
    render() {
        const {
            pageIdx,
            theme,
            changeTheme,
            toggleModal,
            modalOpen,
            updateDemoUser,
            demoUser,
            storeUser,
            loginHandler,
            loginedUser,
            userList,
            subscribeHandler,
            logoutHandler,
            handleClick,
        } = this.props;
        const {
            openHome,
            openAbout,
            openHamburger,
            openAccordian1,
            openAccordian2,
        } = this.state;
        let extraClassNameForHome = null,
            extraClassNameForAbout = null;
        if (pageIdx === 0 || pageIdx === 3 || pageIdx === 6) {
            extraClassNameForHome = `${theme}__active`;
        } else if (pageIdx === 1 || pageIdx === 4) {
            extraClassNameForAbout = `${theme}__active`;
        }
        return (
            <>
                {modalOpen ? (
                    <Modal
                        userList={userList}
                        loginHandler={loginHandler}
                        updateDemoUser={updateDemoUser}
                        demoUser={demoUser}
                        storeUser={storeUser}
                        toggleModal={toggleModal}
                        loginedUser={loginedUser}
                        subscribeHandler={subscribeHandler}
                        logoutHandler={logoutHandler}
                    ></Modal>
                ) : null}
                <header>
                    <div className="logo">
                        <a href="#">
                            <img
                                id="id__home"
                                onClick={handleClick}
                                src="/images/kari-shea-FilM6ng7VGQ-unsplash.jpg"
                                alt="logo"
                                width="75px"
                            />
                        </a>
                        <h1 className={`${theme}__header`}>Only Cats</h1>
                    </div>
                    <nav className={`menubar ${theme}__header`}>
                        <ul className="menubar__menu">
                            <li className="dropdown">
                                <a
                                    className={`dropdown__button ${extraClassNameForHome} ${theme}__header`}
                                    href="#"
                                    id="id__home"
                                    onClick={this.handleOpen}
                                >
                                    Home
                                </a>
                                {openHome ? (
                                    <div
                                        className={`dropdown__content ${theme}__header`}
                                    >
                                        <a
                                            href="#"
                                            id="id__home"
                                            className={`${theme}__dropdown__a ${theme}__header`}
                                            onClick={handleClick}
                                        >
                                            Home Page
                                            <div className="line"></div>
                                        </a>
                                        <a
                                            href="#"
                                            id="id__gallery"
                                            className={`${theme}__dropdown__a ${theme}__header`}
                                            onClick={handleClick}
                                        >
                                            Images Gallery
                                            <div className="line"></div>
                                        </a>

                                        <a
                                            href="#"
                                            id="id__game"
                                            className={`${theme}__dropdown__a ${theme}__header`}
                                            onClick={handleClick}
                                        >
                                            Game
                                            <div className="line"></div>
                                        </a>
                                    </div>
                                ) : null}
                            </li>
                            <li className="dropdown">
                                <a
                                    className={`dropdown__button ${extraClassNameForAbout} ${theme}__header`}
                                    href="#"
                                    id="id__about"
                                    onClick={this.handleOpen}
                                >
                                    About
                                </a>

                                {openAbout ? (
                                    <div
                                        className={`dropdown__content ${theme}__header`}
                                        onClick={handleClick}
                                    >
                                        <a
                                            href="#"
                                            id="id__about"
                                            className={`${theme}__dropdown__a ${theme}__header`}
                                        >
                                            About Us
                                            <div className="line"></div>
                                        </a>
                                        <a
                                            href="#"
                                            id="id__contact"
                                            className={`${theme}__dropdown__a ${theme}__header`}
                                        >
                                            Contact Us
                                            <div className="line"></div>
                                        </a>
                                    </div>
                                ) : null}
                            </li>
                            <li className="dropdown">
                                <div className={`user__status`}>
                                    <div className={`comment__wrapper`}>
                                        <div className="comment__show">
                                            <Icon
                                                extraClassName={
                                                    theme === "dark"
                                                        ? "theme__button gg-sun"
                                                        : "theme__button gg-moon"
                                                }
                                                onClick={changeTheme}
                                            ></Icon>
                                        </div>

                                        <div className="comment__panel">
                                            <ul
                                                className={`comment__back ${theme}__border`}
                                            >
                                                <li
                                                    className={`comment__corner ${theme}__border__corner`}
                                                ></li>
                                                <li className="li__style">
                                                    {theme === "dark"
                                                        ? "Light Mode"
                                                        : "Dark Mode"}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* user info  */}
                                    {loginedUser !== null ? (
                                        <div className={`comment__wrapper`}>
                                            <div className="comment__show">
                                                <button
                                                    className="avatar__fakebutton"
                                                    onClick={toggleModal}
                                                ></button>
                                                <img
                                                    className={`user__avatar ${theme}__border`}
                                                    src="/images/melanie-andersen-Agbtans6EUM-unsplash.jpeg"
                                                    alt="avatar"
                                                    aria-label="userinfo"
                                                    onClick={toggleModal}
                                                />
                                            </div>

                                            <div className="comment__panel comment__panel__userinfo">
                                                <ul
                                                    className={`comment__back ${theme}__border`}
                                                >
                                                    <li
                                                        className={`comment__corner ${theme}__border__corner`}
                                                    ></li>
                                                    <li className="li__style li__style__border">
                                                        User Info
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <button
                                                className="userunlogin__fakebutton"
                                                onClick={toggleModal}
                                            ></button>
                                            <div
                                                className="user__unlogin"
                                                onClick={toggleModal}
                                            >
                                                Login in
                                            </div>
                                        </>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <li className="hamburgermenu">
                        <a
                            className={`hamburgermenu__button ${theme}__hamburger__button`}
                            id="id__hamburger"
                            onClick={this.handleOpen}
                        >
                            <button
                                className="hamburgermenu__fakebutton"
                                id="id__hamburger"
                                onClick={this.handleOpen}
                            ></button>
                            <span id="id__hamburger">
                                <div id="id__hamburger"></div>
                                <div id="id__hamburger"></div>
                                <div id="id__hamburger"></div>
                            </span>
                        </a>
                        {openHamburger ? (
                            <div
                                className={`hamburgermenu__content ${theme}__hamburger__button`}
                                onClick={handleClick}
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            id="accordian1"
                                            onClick={this.openAccordianHandler}
                                        >
                                            Home
                                        </a>
                                        {openAccordian1 === true ? (
                                            <div className="accordian__panel">
                                                <a
                                                    href="#"
                                                    id="id__home"
                                                    className={`${theme}__dropdown__a ${theme}__header`}
                                                    onClick={handleClick}
                                                >
                                                    Home Page
                                                    <div className="line"></div>
                                                </a>
                                                <a
                                                    href="#"
                                                    id="id__gallery"
                                                    className={`${theme}__dropdown__a ${theme}__header`}
                                                    onClick={handleClick}
                                                >
                                                    Images Gallery
                                                    <div className="line"></div>
                                                </a>
                                            </div>
                                        ) : null}
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            id="accordian2"
                                            onClick={this.openAccordianHandler}
                                        >
                                            About
                                        </a>
                                        {openAccordian2 === true ? (
                                            <div className="accordian__panel">
                                                <a
                                                    href="#"
                                                    id="id__about"
                                                    className={`${theme}__dropdown__a ${theme}__header`}
                                                >
                                                    About Us
                                                    <div className="line"></div>
                                                </a>
                                                <a
                                                    href="#"
                                                    id="id__contact"
                                                    className={`${theme}__dropdown__a ${theme}__header`}
                                                >
                                                    Contact Us
                                                    <div className="line"></div>
                                                </a>
                                            </div>
                                        ) : null}
                                    </li>
                                    <li>
                                        <div
                                            className={`${theme}__user__status`}
                                        >
                                            <div className={`comment__wrapper`}>
                                                <div className="comment__show">
                                                    <Icon
                                                        extraClassName={
                                                            theme === "dark"
                                                                ? "theme__button gg-sun"
                                                                : "theme__button gg-moon"
                                                        }
                                                        onClick={changeTheme}
                                                    ></Icon>
                                                </div>

                                                <div className="comment__panel">
                                                    <ul
                                                        className={`comment__back ${theme}__border`}
                                                    >
                                                        <li className="comment__corner"></li>
                                                        <li className="li__style li__style__border">
                                                            {theme === "dark"
                                                                ? "Light Mode"
                                                                : "Dark Mode"}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {loginedUser !== null ? (
                                                <div
                                                    className={`comment__wrapper`}
                                                >
                                                    <div className="comment__show">
                                                        <button
                                                            className="avatar__fakebutton"
                                                            onClick={
                                                                toggleModal
                                                            }
                                                        ></button>
                                                        <img
                                                            className={`user__avatar`}
                                                            src="/images/melanie-andersen-Agbtans6EUM-unsplash.jpeg"
                                                            alt="avatar"
                                                            aria-label="userinfo"
                                                            onClick={
                                                                toggleModal
                                                            }
                                                        />
                                                    </div>

                                                    <div className="comment__panel comment__panel__userinfo">
                                                        <ul
                                                            className={`comment__back ${theme}__border`}
                                                        >
                                                            <li className="comment__corner"></li>
                                                            <li className="li__style li__style__border">
                                                                "User Info"
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <button
                                                        className="userunlogin__fakebutton__humburgermenu"
                                                        onClick={toggleModal}
                                                    ></button>
                                                    <div
                                                        className="user__unlogin"
                                                        onClick={toggleModal}
                                                    >
                                                        Login in
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </li>
                </header>
            </>
        );
    }
}
