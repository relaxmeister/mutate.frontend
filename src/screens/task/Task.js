import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ApplicationForm from '../../components/applicationform/ApplicationForm.js'

import styles from './style.module.css'; // webpacks config gör att detta är sättet att köra på

import defaultImg from '../../assets/icons/policeman.png';
import arrow from '../../assets/icons/right-arrow.png';

const Text = {
    Header: "Frontend Developer",
    Stycke: [{
        Stycke: "Join our small-but-growing Analytics team to help us better understand our users and design the best possible experience for them."
            + "In this central role, you will partner closely with product and business teams to define goals, provide insights, and build data tools.",
        Stycke2: "Your work will support decision-making at all levels of the company and enable us to create a best-in-class communications "
            + "platform that our millions of users and communities love.",
    }]
}

const statement =
    "Mutate strives to become a destination for passionerade people som värdesätter vårt uppdrag – att förena människor kring spel."
    + "Mångfald och delaktighet är absolut nödvändiga faktorer för att vi ska kunna ta oss dit. "
    + "Vi tror att mångfald ger en bättre produkt, bättre beslut och en bättre arbetsmiljö. "
    + "Alla här är fast beslutna att göra Discord till en företrädare för den värld vi vill leva och spela i.";

const hiringProcess =
    "As part of the application process, we may ask you to take on a practical work test. "
    + "The position is full-time and permanent, and we review applications continuously.";

const dummyTask = {
    doing: [
        "Do everything",
        "Make me coffee",
        "Point fingers",
        "Blame everyone except yourself",
        "Pretend to work",
        "Hide from the boss",
    ],
    shouldHave: [
        "3+ years of experience in developing frontend client/web applications. Working with Node.js and any modern framework such as Angular and React.js.",
        "Experience with common front-end development tools such as Webpack, NPM, etc.",
        "Able to work independently as well as help the organization in improving workflows and processes.",
        "Strong understanding of user experience and interactions.",
    ],
    bonus: [
        "Experience with Electron, TypeScript and React.",
        "Experience with C++ and building native modules.",
        "Experience with CI/CD, static code analysis tools and Gitflow.",
    ],
}

const formData = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    cv: "", // denna blir klurig
    pb: "",
    reasoning: "",
}

class Task extends Component {

    state = { modal: false, formData: formData }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ modal: false });
    }

    renderJobDescription() {

    }

    renderDoing() {
        return dummyTask.doing.map(e => {
            return (
                <li key={e}>{e}</li>
            );
        })
    }

    renderShouldHave() {
        return dummyTask.shouldHave.map(e => {
            return (
                <li key={e}>{e}</li>
            );
        })
    }

    renderBonus() {
        return dummyTask.bonus.map(e => {
            return (
                <li key={e}>{e}</li>
            );
        })
    }


    maybeRenderForm() {
        if (this.state.modal) {
            return (
                <ApplicationForm
                    onModalClose={this.modalCloseHandler.bind(this)}
                    onFormChange={(form) => this.setState({formData: form})}
                    formData={this.state.formData}
                />
            );
        }
        return null;
    }

    modalCloseHandler() {
        this.setState({ modal: false })
    }

    render() {
        return (
            <div className={styles.first}>
                <div className={styles.pageSelection}>
                    <div className={styles.pageSelectionWrapper}>
                        <div className={styles.widthDefault}>
                            <div className={styles.flexHorizontal}>
                                <div className={styles.flexChild}>
                                    <div className={styles.jobImgWrapper}>
                                        <img className={styles.fieldImg} src={defaultImg} />
                                    </div>
                                </div>
                                <div className={styles.jobTextFlex}>
                                    <h3>{Text.Header}</h3>
                                    <div>
                                        <div className={styles.stycke}>
                                            You will develop a desktop client application based on Electron.
                                            You will be taking on a role as frontend lead where scalability is important to you,
                                            developing a codebase that can scale to a large number of developers.
                                            You will work with designers and together implement the visual and functional aspects of our client.
                                        </div>
                                        <div className={styles.stycke}>
                                            Lead our Data Platform team to build a scalable data platform that powers features and informs teams. Help us build scalable distributed systems like you'd construct additional pylons in your base. You build those in your sleep, amirite?
                                        </div>
                                    </div>
                                    <Link to={"/recruit"}>
                                        <div className={styles.backToRecruitButton}>
                                            <img className={styles.arrowImg} src={arrow} />
                                            Go back to jobs
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.eventuellBackground}>
                    <div className={styles.pageSelection}>
                        <div className={styles.pageSelectionWrapper}>
                            <div className={styles.otherWidth}>
                                <p className={styles.diversityStatement}>{statement}</p>
                                <div className={styles.description}>
                                    <div>
                                        <h4 className={styles.descriptionHeader}>What you'll be doing</h4>
                                        <ul className={styles.listContainer}>
                                            {this.renderDoing()}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className={styles.descriptionHeader}>What you should have</h4>
                                        <ul className={styles.listContainer}>
                                            {this.renderShouldHave()}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className={styles.descriptionHeader}>Bonus Points</h4>
                                        <ul className={styles.listContainer}>
                                            {this.renderBonus()}
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.hiringProcess}>{hiringProcess}</p>
                                <div onClick={() => this.setState({ modal: true })}>
                                    <div className={styles.backToRecruitButton}>
                                        Apply
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.maybeRenderForm()}
                </div>
            </div>
        );
    }
}

export default Task;