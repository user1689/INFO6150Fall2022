import React, { Component } from "react";

import Card from "../Card";
import About from "../About";
import Panels from "../Panels";
import Gallery from "../Gallery";
import Maze from "../Maze/Maze";

import "./index.css";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {catId: 0};
        this.randomCats = [
            createCat(
                "Abyssinian Cat",
                "Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored. They’re sometimes referred to as “Aby-grabbys” because they tend to take things that grab their interest. The playful Aby loves to jump and climb. Keep a variety of toys on hand to keep her occupied, including puzzle toys that challenge her intelligence.",
                "/images/sergey-semin-7i0FG_jFyuo-unsplash.jpg",
                0
            ),
            createCat(
                "Bobtail Cat",
                "The Bobtail is an athletic breed that looks like a bobtailed wildcat and has many dog-like tendencies. Loves cheeseburgers hate dog. Immediately regret falling into bathtub throwup on your pillow i will ruin the couch with my claws and allways wanting food."
                ,"/images/petrebels-4iw1JN8tf70-unsplash.jpg",
                1  
            ),
            createCat(
                "British Short hair Cat",
                "The British Shorthair is an easygoing feline. She enjoys affection but isn’t needy and dislikes being carried. She’ll follow you from room to room, though, out of curiosity. British Shorthairs aren’t lap cats, but they do enjoy snuggling next to their people on the couch."
                ,"/images/josh-couch-_zSDTK_Ojcg-unsplash.jpg",
                2
            ),
            createCat(
                "Burmese Cat",
                "The Burmese thrives on companionship with her humans and other cats. Like her Siamese ancestors, she enjoys conversation, but has a much softer, sweeter voice. Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers. "
                ,"/images/aung-moe-oo-yjXWJCCzJA8-unsplash.jpg",
                3
            ),
            createCat(
                "Chartreux Cat",
                "Often called the smiling cat of France, the Chartreux has a sweet, smiling expression. This sturdy, powerful cat has a distinctive blue coat with a resilient wooly undercoat. Historically known as fine mousers with strong hunting instincts, the Chartreux enjoys toys that move. This is a slow-maturing breed that reaches adulthood in three to five years. A loving, gentle companion, the Chartreux forms a close bond with her family."
                ,"/images/camille-JGXTpBft8o0-unsplash.jpg",
                4
            ),
            createCat(
                "Birman Cat",
                "The Birman is a cat of distinction as well as legend. With their exotic ancestry, luxurious pointed coats, “white gloved” paws and mesmerizing blue eyes, this is a breed with undeniable charisma.  Time to go zooooom throw down all the stuff in the kitchen."
                ,"/images/omar-ram-ld_NqD23LgA-unsplash.jpg",
                5
            ),
            createCat(
                "Bombay Cat",
                "The Bombay is an easy-going, yet energetic cat. She does well in quiet apartments where she’s the center of attention as well as in lively homes with children and other pets. She’ll talk to you in a distinct voice, and you’re likely to find her in the warmest spot in your home, whether that’s in the sunlight from a window or curled up under the covers in bed with you."
                ,"/images/james-park-LsQGIcRVUYc-unsplash.jpg",
                6
            ),
            createCat(
                "Ragdoll Cat",
                "Ragdolls are loving, smart and playful. They show affection to their people by greeting them, following them around, sitting in their laps and snuggling in bed. Ragdoll cats can also learn tricks and certain behaviors with positive reinforcement.",
                "/images/esteban-chinchilla-DwkgUqRcHrA-unsplash.jpg",
                7
            )
        ];
    } 
    // getRandomSize = () => {
    //     return Math.floor(Math.random() * (900 - 800 + 1) + 400);
    // }
    detailHandler = (catId) => {
        this.setState({catId});
    }
    render() {
        const { pageIdx, theme } = this.props;
        const {catId} = this.state;
        let showPage;
        if (pageIdx === 0) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>Home Page</h2>
                    <div class="main__content">
                        <Card detailHandler={this.detailHandler} randomCats={this.randomCats} theme={theme} changePage={this.props.changePage}></Card>
                        <Card detailHandler={this.detailHandler} randomCats={this.randomCats} theme={theme} changePage={this.props.changePage}></Card>
                        <Card detailHandler={this.detailHandler} randomCats={this.randomCats} theme={theme} changePage={this.props.changePage}></Card>
                        <Card detailHandler={this.detailHandler} randomCats={this.randomCats} theme={theme} changePage={this.props.changePage}></Card>
                        <Card detailHandler={this.detailHandler} randomCats={this.randomCats} theme={theme} changePage={this.props.changePage}></Card>
                    </div>
                </main>
            );
        } else if (pageIdx === 1) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>About Us</h2>
                    <div class="main__content">
                        <About content={"about"} theme={theme}></About>
                    </div>
                </main>
            );
        } 
        else if (pageIdx === 2) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>Detail</h2>
                    <div class="main__content">
                        <Panels catId={catId} theme={theme} randomCats={this.randomCats}></Panels>
                    </div>
                </main>
            );
        } 
        else if (pageIdx === 3) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}> Images Gallery </h2>
                    <div class="main__content">
                        <Gallery catId={catId} randomCats={this.randomCats}></Gallery>
                        {/* <Panels></Panels> */}
                    </div>
                </main>
            );
        }else if(pageIdx === 4) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>Contact Us</h2>
                    <div class="main__content">
                        <About content={"contact"} theme={theme}></About>
                    </div>
                </main>
            );
        } else if (pageIdx === 5) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>Privay Policy</h2>
                    <div class="main__content">
                        <About content={"privacy"} theme={theme}></About>
                    </div>
                </main>
            );
        } else if (pageIdx === 6) {
            showPage = (
                <main id="main">
                    <h2 className={`subheader ${theme}__header`}>Game</h2>
                    <div class="main__content">
                        <Maze theme={theme}></Maze>
                    </div>
                </main>
            );
        }
        return showPage;
    }
}
const createCat = (carName, description, img, detailIdx) => {
    return {
        carName: carName,
        description: description,
        img: img,
        detailIdx: detailIdx,
    };
};
