import React, { Component } from "react";

import "./index.css";
import Form from "../Form";

export default class index extends Component {
    render() {
        const {
            toggleModal,
            updateDemoUser,
            demoUser,
            storeUser,
            loginHandler,
            userList,
            loginedUser,
            subscribeHandler,
            logoutHandler
        } = this.props;
        return (
            <div id="myModal" className="modal">
                <div className="modal__content">
                    <Form
                        userList={userList}
                        loginHandler={loginHandler}
                        updateDemoUser={updateDemoUser}
                        demoUser={demoUser}
                        storeUser={storeUser}
                        toggleModal={toggleModal}
                        loginedUser={loginedUser}
                        subscribeHandler={subscribeHandler}
                        logoutHandler={logoutHandler}
                    ></Form>
                </div>
            </div>
        );
    }
}
