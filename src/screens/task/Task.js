import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ApplicationForm from '../../components/applicationform/ApplicationForm.js'

import styles from './style.module.css'; // webpacks config gör att detta är sättet att köra på

import defaultImg from '../../assets/icons/policeman.png';
import arrow from '../../assets/icons/right-arrow.png';
import { getJobDetails } from '../../services/api/ApiService';

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
    job: Text.Header,
    reasoning: "",
    cv: "", // denna blir klurig
    pb: "",
}

class Task extends Component {

    state = { modal: false, formData: formData, jobData: undefined, realJob: undefined }

    componentDidMount() {
        fetch(`http://localhost:8080/recruit/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(async response => {
            if (response.status >= 200 && response.status < 300) {

                //console.log("successjbobobjob!");
                //console.log(response.json());
                return response.json();
            } else {
                console.log("something went wrong with GETJOBS");
            }
        }).then(result => {
            console.log(result);
            this.setState({
                jobData: result
            })
            this.setState({
                ...this.state.formData,
                job: result.role
            })
            console.log(this.state.formData);
            return result;
        }).catch(err => err);

        /*const id = parseInt(this.props.match.params.id, 10);
        getJobDetails(id).then((jobData) => {
            this.setState({
                jobData: jobData
            })
        });*/
        window.scrollTo(0, 0);
        const newFormData = {
            ...formData,
            job: Text.Header
        }
        //this.setState({ lastNameError: undefined })
        //this.props.onFormChange(newFormData)

        this.setState({
            modal: false,

        });
    }

    renderRole() {
        if (this.state.jobData !== undefined) {
                return this.state.jobData.role;
        }
    }

    renderJobDescription() {
        if (this.state.jobData !== undefined) {
            return this.state.jobData.jobDescription.map(e => {
                return (
                    <div key={e} className={styles.stycke}>
                        {e}
                    </div>
                );
            })
        }
    }

    renderDoing() {
        if (this.state.jobData !== undefined) {
            return this.state.jobData.doing.map(e => {
                return (
                    <li key={e}>{e}</li>
                );
            })
        }
    }

    renderShouldHave() {
        if (this.state.jobData !== undefined) {
            return this.state.jobData.shouldHave.map(e => {
                return (
                    <li key={e}>{e}</li>
                );
            })
        }
    }

    renderBonus() {
        if (this.state.jobData !== undefined) {
            return this.state.jobData.bonus.map(e => {
                return (
                    <li key={e}>{e}</li>
                );
            })
        }
    }


    maybeRenderForm() {
        if (this.state.modal) {
            return (
                <ApplicationForm
                    onModalClose={this.modalCloseHandler.bind(this)}
                    onFormChange={(form) => this.setState({ formData: form })}
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
        console.log("realjob: " + this.state.realJob);
        return (
            <div className={styles.first}>
                <div className={styles.pageSelection}>
                    <div className={styles.pageSelectionWrapper}>
                        <div className={styles.widthDefault}>
                            <div className={styles.flexHorizontal}>
                                <div className={styles.flexChild}>
                                    <div className={styles.jobImgWrapper}>
                                        <img className={styles.fieldImg} src={defaultImg} alt="placeholder" />
                                    </div>
                                </div>
                                <div className={styles.jobTextFlex}>
                                    <h3>{this.renderRole()}</h3>
                                    <div>
                                        {this.renderJobDescription()}
                                    </div>
                                    <Link to={"/recruit"}>
                                        <div className={styles.backToRecruitButton}>
                                            <img className={styles.arrowImg} src={arrow} alt="placeholder" />
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