import React, { Component } from "react";

import "./index.css";

import Input from "../Input";
import Button from "../Button";
import Icon from "../Icon";

export default class index extends Component {
    state = {
        isLoginMode: true,
        isValidForm: false,
        isValidUsername: false,
        isValidPassword: false,
        isValidEmail: false,
        isValidConfirmEmail: false,
        errorForUsername: null,
        errorForPassword: null,
        errorForEmail: null,
        errorForConfirmEmail: null,
        errorForLogin: null,
        isValidLoginForm: false,
        emailInserted: false,
        confirmEmailInserted: false,
        emailEqualsConfirmEamil: false,
    };
    handleLogin = (event) => {
        event.preventDefault();
        const {
            isValidUsername,
            isValidPassword,
        } = this.state;
        const { loginHandler, userList, demoUser, toggleModal } =
            this.props;

        if (isValidUsername && isValidPassword) {
            let userNameExist = false;
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].userName === demoUser.userName) {
                    userNameExist = true;
                    if (userList[i].passWord === demoUser.passWord) {
                        console.log("login successful!");
                        loginHandler(userList[i]);
                        toggleModal();
                        break;
                    } else {
                        this.setState({
                            errorForLogin: "Username password does not match",
                        });
                    }
                }
            }

            if (!userNameExist) {
                this.setState({ errorForLogin: "Username does not exist" });
            }
        } else {
            if (
                demoUser.userName === null ||
                demoUser.userName.trim() === "" ||
                isValidUsername
            ) {
                if (
                    demoUser.userName === null ||
                    demoUser.userName.trim() === ""
                ) {
                    this.setState({
                        errorForUsername: "This field is required",
                    });
                } else {
                    let userName = demoUser.userName;
                    let userNameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
                    let result = userNameRegex.test(userName);
                    if (result) {
                        this.setState({
                            errorForUsername: null,
                            isValidUsername: true,
                            errorForLogin: null,
                        });
                    } else {
                        this.setState({
                            errorForUsername:
                                "Valid username length is from 4 to 16",
                            isValidUsername: false,
                        });
                    }
                }
            }

            if (
                demoUser.passWord === null ||
                demoUser.passWord.trim() === "" ||
                isValidPassword
            ) {
                if (
                    demoUser.passWord === null ||
                    demoUser.passWord.trim() === ""
                ) {
                    this.setState({
                        errorForPassword: "This field is required",
                    });
                } else {
                    let passWord = demoUser.passWord;
                    let passWordRegex = /^[a-zA-Z0-9]{6,}$/;
                    let result = passWordRegex.test(passWord);
                    if (result) {
                        this.setState({
                            errorForPassword: null,
                            isValidPassword: true,
                            errorForLogin: null,
                        });
                    } else {
                        this.setState({
                            errorForPassword:
                                "Valid password length is greater than 6",
                            isValidPassword: false,
                        });
                    }
                }
            }
        }
    };
    handleLogOut = (event) => {
        const { logoutHandler, toggleModal } = this.props;
        event.preventDefault();
        toggleModal();
        logoutHandler();
    };
    handleRegister = (event) => {
        event.preventDefault();
        const {
            isValidUsername,
            isValidPassword,
            isValidEmail,
            isValidConfirmEmail,
            emailInserted,
            confirmEmailInserted,
        } = this.state;
        const { updateDemoUser, storeUser, demoUser } = this.props;
        if (
            isValidUsername &&
            isValidPassword &&
            isValidEmail &&
            isValidConfirmEmail
        ) {
            this.setState({ isLoginMode: true });
            storeUser();
            updateDemoUser(
                ["userName", ""],
                ["passWord", ""],
                ["email", ""],
                ["confirmEmail", ""],
                ["subscribe", false]
            );
            this.setState({
                isValidForm: false,
                isValidUsername: false,
                isValidPassword: false,
                isValidEmail: false,
                isValidConfirmEmail: false,
                errorForUsername: null,
                errorForPassword: null,
                errorForEmail: null,
                errorForConfirmEmail: null,
                emailInserted: false,
                confirmEmailInserted: false,
                emailEqualsConfirmEamil: false,
            });
        } else {
            if (
                demoUser.userName === null ||
                demoUser.userName.trim() === "" ||
                isValidUsername
            ) {
                if (
                    demoUser.userName === null ||
                    demoUser.userName.trim() === ""
                ) {
                    this.setState({
                        errorForUsername: "This field is required",
                    });
                } else {
                    let userName = demoUser.userName;
                    let userNameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
                    let result = userNameRegex.test(userName);
                    if (result) {
                        updateDemoUser(["userName", userName]);
                        this.setState({
                            errorForUsername: null,
                            isValidUsername: true,
                        });
                    } else {
                        this.setState({
                            errorForUsername:
                                "Valid username length is from 4 to 16",
                            isValidUsername: false,
                        });
                    }
                }
            }

            if (
                demoUser.passWord === null ||
                demoUser.passWord.trim() === "" ||
                isValidPassword
            ) {
                if (
                    demoUser.passWord === null ||
                    demoUser.passWord.trim() === ""
                ) {
                    this.setState({
                        errorForPassword: "This field is required",
                    });
                } else {
                    let passWord = demoUser.passWord;
                    let passWordRegex = /^[a-zA-Z0-9]{6,}$/;
                    let result = passWordRegex.test(passWord);
                    if (result) {
                        updateDemoUser(["passWord", passWord]);
                        this.setState({
                            errorForPassword: null,
                            isValidPassword: true,
                        });
                    } else {
                        this.setState({
                            errorForPassword:
                                "Valid password length is greater than 6",
                            isValidPassword: false,
                        });
                    }
                }
            }

            if (
                demoUser.email === null ||
                demoUser.email.trim() === "" ||
                isValidEmail
            ) {
                if (demoUser.email === null || demoUser.email.trim() === "") {
                    this.setState({
                        errorForEmail: "This field is required",
                        isValidEmail: false,
                    });
                } else {
                    let email = demoUser.email;
                    let emailRegex =
                        /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    let result = emailRegex.test(email);
                    if (result) {
                        this.setState({
                            errorForEmail: null,
                            isValidEmail: true,
                        });

                        if (confirmEmailInserted) {
                            if (!isValidConfirmEmail) {
                                this.setState({
                                    errorForConfirmEmail:
                                        "Please enter a valid confirm email",
                                    isValidConfirmEmail: false,
                                    emailEqualsConfirmEamil: false,
                                });
                            } else if (demoUser.confirmEmail !== email) {
                                this.setState({
                                    errorForConfirmEmail:
                                        "This field must match email address",
                                    emailEqualsConfirmEamil: false,
                                });
                            } else {
                                this.setState({
                                    emailEqualsConfirmEamil: true,
                                    errorForEmail: null,
                                    errorForConfirmEmail: null,
                                    isValidEmail: true,
                                    isValidConfirmEmail: true,
                                });
                            }
                        }
                    } else {
                        this.setState({
                            errorForEmail: "Please enter a valid email",
                            isValidEmail: false,
                        });
                    }
                }
            }

            if (
                demoUser.confirmEmail === null ||
                demoUser.confirmEmail.trim() === "" ||
                isValidConfirmEmail
            ) {
                if (
                    demoUser.confirmEmail === null ||
                    demoUser.confirmEmail.trim() === ""
                ) {
                    this.setState({
                        errorForConfirmEmail: "This field is required",
                        isValidConfirmEmail: false,
                    });
                } else {
                    let confirmEmail = demoUser.confirmEmail;
                    let emailRegex =
                        /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    let result = emailRegex.test(confirmEmail);
                    if (result) {
                        this.setState({
                            errorForConfirmEmail: null,
                            isValidConfirmEmail: true,
                        });

                        if (emailInserted) {
                            if (!isValidEmail) {
                                this.setState({
                                    errorForConfirmEmail: null,
                                    emailEqualsConfirmEamil: false,
                                });
                            } else if (demoUser.email !== confirmEmail) {
                                console.log("unequals!");
                                this.setState({
                                    errorForConfirmEmail:
                                        "This field must match email address",
                                    emailEqualsConfirmEamil: false,
                                });
                            } else {
                                console.log("equals!");
                                this.setState({
                                    emailEqualsConfirmEamil: true,
                                    errorForEmail: null,
                                    errorForConfirmEmail: null,
                                    isValidEmail: true,
                                    isValidConfirmEmail: true,
                                });
                            }
                        }
                    } else {
                        this.setState({
                            errorForConfirmEmail:
                                "Please enter a valid confirm email",
                            isValidConfirmEmail: false,
                        });
                    }
                }
            }
        }
        // return false;
    };
    handleSwitch = (event) => {
        event.preventDefault();
        const { isLoginMode } = this.state;
        const { updateDemoUser } = this.props;
        updateDemoUser(
            ["userName", ""],
            ["passWord", ""],
            ["email", ""],
            ["confirmEmail", ""],
            ["subscribe", false]
        );
        this.setState({
            isLoginMode: !isLoginMode,
            isValidForm: false,
            isValidUsername: false,
            isValidPassword: false,
            isValidEmail: false,
            isValidConfirmEmail: false,
            errorForUsername: null,
            errorForPassword: null,
            errorForEmail: null,
            errorForConfirmEmail: null,
            errorForLogin: null,
            emailInserted: false,
            confirmEmailInserted: false,
            emailEqualsConfirmEamil: false,
        });
    };
    handleUserNameInput = (event) => {
        let userNameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
        let userName = event.target.value;
        const { isLoginMode } = this.state;
        const { updateDemoUser, userList } = this.props;
        updateDemoUser(["userName", userName]);

        this.setState({
            errorForLogin: null,
        });

        if (event.target.value === null || event.target.value.trim() === "") {
            this.setState({
                errorForUsername: "This field is required",
                isValidUsername: false,
            });
        } else {
            let result = userNameRegex.test(userName);
            if (result) {
                let exists = false;
                if (!isLoginMode) {
                    for (let i = 0; i < userList.length; i++) {
                        if (userList[i].userName === userName) {
                            exists = true;
                        }
                    }
                }

                if (!exists) {
                    updateDemoUser(["userName", userName]);
                    this.setState({
                        errorForUsername: null,
                        isValidUsername: true,
                    });
                } else {
                    this.setState({
                        errorForUsername: "Username exists",
                        isValidUsername: false,
                    });
                }
            } else {
                this.setState({
                    errorForUsername: "Valid username length is from 4 to 16",
                    isValidUsername: false,
                });
            }
        }
    };
    handlPassWordInput = (event) => {
        let passWordRegex = /^[a-zA-Z0-9]{6,}$/;
        let passWord = event.target.value;
        const { updateDemoUser } = this.props;
        updateDemoUser(["passWord", passWord]);

        this.setState({
            errorForLogin: null,
        });

        if (event.target.value === null || event.target.value.trim() === "") {
            this.setState({
                errorForPassword: "This field is required",
                isValidPassword: false,
            });
        } else {
            let result = passWordRegex.test(passWord);
            if (result) {
                updateDemoUser(["passWord", passWord]);
                this.setState({
                    errorForPassword: null,
                    isValidPassword: true,
                });
            } else {
                this.setState({
                    errorForPassword: "Valid password length is greater than 6",
                    isValidPassword: false,
                });
            }
        }
    };
    handlEmailInput = (event) => {
        let emailRegex = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let email = event.target.value;
        const { confirmEmailInserted, isValidConfirmEmail } =
            this.state;
        const { updateDemoUser, demoUser } = this.props;
        this.setState({ emailInserted: true });

        updateDemoUser(["email", email]);

        if (event.target.value === null || event.target.value.trim() === "") {
            this.setState({
                errorForEmail: "This field is required",
                isValidEmail: false,
            });
        } else {
            let result = emailRegex.test(email);
            if (result) {
                updateDemoUser(["email", email]);
                this.setState({ errorForEmail: null, isValidEmail: true });

                if (confirmEmailInserted) {
                    if (!isValidConfirmEmail) {
                        this.setState({
                            errorForConfirmEmail:
                                "Please enter a valid confirm email",
                            isValidConfirmEmail: false,
                            emailEqualsConfirmEamil: false,
                        });
                    } else if (demoUser.confirmEmail !== email) {
                        this.setState({
                            errorForConfirmEmail:
                                "This field must match email address",
                            emailEqualsConfirmEamil: false,
                        });
                    } else {
                        // const updatedDemoUser = {
                        //     ...demoUser,
                        //     email,
                        // };
                        this.setState({
                            emailEqualsConfirmEamil: true,
                            errorForEmail: null,
                            errorForConfirmEmail: null,
                            isValidEmail: true,
                            isValidConfirmEmail: true,
                        });
                    }
                }
            } else {
                this.setState({
                    errorForEmail: "Please enter a valid email",
                    isValidEmail: false,
                });
            }
        }
    };
    handlConfirmEmailInput = (event) => {
        let emailRegex = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let confirmEmail = event.target.value;
        const { emailInserted, isValidEmail } = this.state;
        const { updateDemoUser, demoUser } = this.props;
        updateDemoUser(["confirmEmail", confirmEmail]);
        this.setState({ confirmEmailInserted: true });
        if (event.target.value === null || event.target.value.trim() === "") {
            this.setState({
                errorForConfirmEmail: "This field is required",
                isValidConfirmEmail: false,
            });
        } else {
            let result = emailRegex.test(confirmEmail);
            if (result) {
                updateDemoUser(["confirmEmail", confirmEmail]);
                this.setState({
                    errorForConfirmEmail: null,
                    isValidConfirmEmail: true,
                });

                if (emailInserted) {
                    if (!isValidEmail) {
                        this.setState({
                            errorForConfirmEmail: null,
                            emailEqualsConfirmEamil: false,
                        });
                    } else if (demoUser.email !== confirmEmail) {
                        console.log("unequals!");
                        this.setState({
                            errorForConfirmEmail:
                                "This field must match email address",
                            emailEqualsConfirmEamil: false,
                        });
                    } else {
                        console.log("equals!");
                        this.setState({
                            emailEqualsConfirmEamil: true,
                            errorForEmail: null,
                            errorForConfirmEmail: null,
                            isValidEmail: true,
                            isValidConfirmEmail: true,
                        });
                    }
                }
            } else {
                this.setState({
                    errorForConfirmEmail: "Please enter a valid confirm email",
                    isValidConfirmEmail: false,
                });
            }
        }
    };
    handleCheckBox = (event) => {
        const { updateDemoUser } = this.props;
        if (event.target.checked) {
            updateDemoUser(["subscribe", true]);
        } else {
            updateDemoUser(["subscribe", false]);
        }
    };
    render() {
        const {
            isLoginMode,
            errorForUsername,
            errorForPassword,
            errorForEmail,
            errorForConfirmEmail,
            isValidUsername,
            isValidPassword,
            isValidEmail,
            isValidConfirmEmail,
            errorForLogin,
            isValidLoginForm,
        } = this.state;
        const { toggleModal, demoUser, loginedUser, subscribeHandler } =
            this.props;
        const userHandler = isLoginMode
            ? this.handleLogin
            : this.handleRegister;
        return loginedUser !== null ? (
            <form className="model__form" id="form" method="post">
                <div className="form__title">
                    <h2>User Info</h2>
                    <Icon
                        onClick={toggleModal}
                        extraClassName="close gg-close"
                    ></Icon>
                </div>
                <div className="input">
                    <div className="input__box">
                        <label className="input__name">
                            Username: &nbsp;
                            <span>{loginedUser.userName}</span>
                        </label>
                    </div>
                    <div className="input__box">
                        <label className="input__name">
                            Password: &nbsp;
                            <span>{loginedUser.passWord}</span>
                        </label>
                    </div>
                    <div className="input__box">
                        <label className="input__name">
                            Email: &nbsp;
                            <span>{loginedUser.email}</span>
                        </label>
                    </div>
                    <div>
                        <label className="input__name">
                            Subscribe: &nbsp;
                            <Input
                                onChange={(e) => {
                                    subscribeHandler(e);
                                }}
                                type="checkbox"
                                checked={
                                    loginedUser.subscribe ? true : false
                                }
                            ></Input>
                        </label>
                    </div>
                    <Button
                        onClick={this.handleLogOut}
                        extraClassName="button__submit"
                    >
                        LOG OUT
                    </Button>
                </div>
            </form>
        ) : (
            <form className="model__form" id="form" method="post">
                <div className="form__title">
                    <h2>Login Required</h2>
                    <Icon
                        onClick={toggleModal}
                        extraClassName="close gg-close"
                    ></Icon>
                </div>
                <div className="input">
                    <div className="input__content">
                        <div className="input__box">
                            <label
                                className="input__name"
                                // name="confirm_email"
                            >
                                Username: &nbsp;
                                <span>* required</span>
                                <Input
                                    type="input"
                                    onChange={this.handleUserNameInput}
                                    value={`${demoUser.userName}`}
                                ></Input>
                            </label>
                        </div>
                        <span className="error">
                            {errorForUsername !== null ? (
                                `${errorForUsername}`
                            ) : isValidUsername ? (
                                <Icon extraClassName="gg-check"></Icon>
                            ) : null}
                            &nbsp;
                        </span>
                    </div>
                    <div className="input__content">
                        <div className="input__box">
                            <label className="input__name">
                                Password: &nbsp;
                                <span>* required</span>
                                <Input
                                    type="input"
                                    onChange={this.handlPassWordInput}
                                    value={`${demoUser.passWord}`}
                                ></Input>
                            </label>
                        </div>
                        <span className="error">
                            {errorForPassword !== null ? (
                                `${errorForPassword}`
                            ) : isValidPassword ? (
                                <Icon extraClassName="gg-check"></Icon>
                            ) : null}
                            &nbsp;
                        </span>
                    </div>
                    {!isLoginMode ? (
                        <div className="input__content">
                            <div className="input__box">
                                <label className="input__name">
                                    Email: &nbsp; <span>* required</span>
                                    <Input
                                        type="input"
                                        onChange={this.handlEmailInput}
                                        value={`${demoUser.email}`}
                                    ></Input>
                                </label>
                            </div>
                            <span className="error">
                                {errorForEmail !== null ? (
                                    `${errorForEmail}`
                                ) : isValidEmail ? (
                                    <Icon extraClassName="gg-check"></Icon>
                                ) : null}
                                &nbsp;
                            </span>
                        </div>
                    ) : null}
                    {!isLoginMode ? (
                        <div className="input__content">
                            <div className="input__box">
                                <label
                                    className="input__name"
                                    // name="confirm_email"
                                >
                                    Confirm Email: &nbsp;
                                    <span>* required</span>
                                    <Input
                                        type="input"
                                        onChange={this.handlConfirmEmailInput}
                                        value={`${demoUser.confirmEmail}`}
                                    ></Input>
                                </label>
                            </div>
                            <span className="error">
                                {errorForConfirmEmail !== null ? (
                                    `${errorForConfirmEmail}`
                                ) : isValidConfirmEmail ? (
                                    <Icon extraClassName="gg-check"></Icon>
                                ) : null}
                                &nbsp;
                            </span>{" "}
                        </div>
                    ) : null}
                    {!isLoginMode ? (
                        <div>
                            <label className="input__name">
                                Do you want to subscribe email from us? &nbsp;
                                <Input
                                    type="checkbox"
                                    onChange={this.handleCheckBox}
                                ></Input>
                            </label>
                        </div>
                    ) : null}
                    {isLoginMode ? (
                        <span className="error">
                            {errorForLogin !== null ? (
                                `${errorForLogin}`
                            ) : isValidLoginForm ? (
                                <Icon extraClassName="gg-check"></Icon>
                            ) : null}
                            &nbsp;
                        </span>
                    ) : null}
                    <Button
                        onClick={userHandler}
                        type="submit"
                        extraClassName="button__submit"
                    >
                        {isLoginMode ? "LOGIN IN" : "SIGN UP"}
                    </Button>
                    <Button
                        onClick={this.handleSwitch}
                        extraClassName="button__submit button__adjust"
                    >
                        SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN IN"}{" "}
                    </Button>
                </div>
            </form>
        );
    }
}
