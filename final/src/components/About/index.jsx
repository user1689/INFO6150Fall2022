import React, { Component } from "react";

import "./index.css";

import Input from "../Input";

export default class index extends Component {
    render() {
        const { theme, content } = this.props;
        switch (content) {
            case "about":
                return (
                    <div className={`content__text ${theme}__font`}>
                        <p>
                            &nbsp;&nbsp;Welcome to our website! This is an
                            interesting website only about Cats, which contains
                            a variety of cat pictures. We are a group of cat
                            lovers who formed this community. Cat is cute. Also
                            welcome to share your cat pictures. If you want to
                            join us, click register page.
                        </p>
                        <p>
                            &nbsp;&nbsp;1. Providing cat-related advice to cat
                            owners, with the best interest of the cat in mind.
                            We work hard at helping cats by creating a welcoming
                            and friendly environment where cat owners can come
                            together to learn more about their cats and the best
                            ways to care for them.
                        </p>
                        <p>
                            &nbsp;&nbsp;2. Creating a lively online community
                            where avid cat lovers can share pictures and stories
                            about their cats as well as develop social
                            interactions with like-minded people. Our
                            fully-moderated site provides a safe haven for these
                            dedicated cat people, for whom their cats are part
                            of the family.
                        </p>
                    </div>
                );
            case "privacy":
                return (
                    <div className={`content__text ${theme}__font`}>
                        <p>
                            &nbsp;&nbsp;At OnlyCats we care about your privacy
                            concerns. Please read the following statement to
                            learn about our privacy policy. Also, please take a
                            moment to read our Terms of Service as they are part
                            of our privacy policy.
                        </p>
                        <p>
                            &nbsp;&nbsp; Links This site contains links to other
                            sites. OnlyCats is not responsible for the privacy
                            practices or the content of such Web sites. This
                            includes links to our associates and advertisers.
                        </p>
                        <p>
                            &nbsp;&nbsp;Legal Disclosures of Information Except
                            under the following circumstances, OnlyCats will not
                            share your personally identifiable information with
                            a third party without your prior consent. There are
                            a limited number of situations where we may disclose
                            your personal information to others without first
                            receiving your consent: (1) when legally ordered to
                            do so by a lawful subpoena or court order, (2) if we
                            believe conduct by you will harm the property or
                            rights of OnlyCats , or (3) under exigent
                            circumstances to protect the physical safety of
                            OnlyCats, its employees, users or the general
                            public.
                        </p>
                    </div>
                );
            case "contact":
                return (
                    <div className={`container content__text`}>
                        <form className="contact__form">
                            <div className="contact__inputbox">
                                <label>First Name</label>
                                <Input
                                    className="contact__text"
                                    type="text"
                                ></Input>
                            </div>

                            <div className="contact__inputbox">
                                <label>Last Name</label>
                                <Input
                                    className="contact__text"
                                    type="text"
                                ></Input>
                            </div>

                            <div className="contact__inputbox">
                                <label>Country</label>
                                <select>
                                    <option>China</option>
                                    <option>USA</option>
                                </select>
                            </div>

                            <div className="contact__inputbox">
                                <label htmlFor="subject">Subject</label>
                                <textarea></textarea>
                            </div>

                            <input className={`contact__button ${theme}__contact`} type="submit" value="Submit"/>
                        </form>
                    </div>
                );
        }
    }
}
