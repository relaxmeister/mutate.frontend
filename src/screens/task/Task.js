import React, { Component } from "react";
import { Link } from "react-router-dom";

import ApplicationForm from "../../components/applicationform/ApplicationForm.js";
import LoadingCard from "../../components/loadingcard/LoadingCard";
import ErrorCard from "../../components/errorcard/ErrorCard";

import styles from "./style.module.css"; // webpacks config gör att detta är sättet att köra på

import defaultImg from "../../assets/icons/policeman.png";
import arrow from "../../assets/icons/right-arrow.png";
import { getJobDetails } from "../../services/api/ApiService";

const statement =
  "Mutate strives to become a destination for passionerade people som värdesätter vårt uppdrag – att förena människor kring spel." +
  "Mångfald och delaktighet är absolut nödvändiga faktorer för att vi ska kunna ta oss dit. " +
  "Vi tror att mångfald ger en bättre produkt, bättre beslut och en bättre arbetsmiljö. " +
  "Alla här är fast beslutna att göra Discord till en företrädare för den värld vi vill leva och spela i.";

const hiringProcess =
  "As part of the application process, we may ask you to take on a practical work test. " +
  "The position is full-time and permanent, and we review applications continuously.";

const formData = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  city: "",
  job: "",
  role: "",
  jobSpecifics: {},
  reasoning: "",
  cv: "", // denna blir klurig
  pb: ""
};

class Task extends Component {
  state = {
    modal: false,
    formData: formData,
    jobData: undefined,
    realJob: undefined,
    loading: true,
    error: false
  };

  componentDidMount() {
    fetch(`http://localhost:8080/recruit/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          //console.log("successjbobobjob!");
          //console.log(response.json());
          return response.json();
        } else {
          console.log("something went wrong with GETJOBS");
        }
      })
      .then(result => {
        console.log(result);

        //Kopplat till Task
        this.setState({
          jobData: result
        });

        //Kopplat till modalform
        const newFormData = {
          ...this.state.formData,
          role: result.role,
          job: result, //TODO SE OM DETTA FUNKADE
        };
        // this.setState({
        //   formData: newFormData
        // });
        this.setState({ loading: false, formData: newFormData });
        console.log(this.state.formData);
        return result;
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.log("error:" + err);
      });

    /*const id = parseInt(this.props.match.params.id, 10);
        getJobDetails(id).then((jobData) => {
            this.setState({
                jobData: jobData
            })
        });*/
    window.scrollTo(0, 0);

    //this.setState({ lastNameError: undefined })
    //this.props.onFormChange(newFormData)

    this.setState({
      modal: false
    });
  }

  renderContent() {
    if (this.state.loading /*|| !this.state.loading*/) {
      return (
        <>
          <div className={styles.pageSelection}>
            <div className={styles.pageSelectionWrapper}>
              <div className={styles.widthDefault}>
                <div
                  className={`${styles.flexHorizontal} ${styles.marginTop200} ${styles.marginBottom200} ${styles.flexHelper}`}
                >
                  <LoadingCard />
                </div>
                <div
                  style={{ height: "1px" }}
                  // pga margin ovan :/
                ></div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.error) {
      return (
        <>
          <div className={styles.pageSelection}>
            <div className={styles.pageSelectionWrapper}>
              <div className={styles.widthDefault}>
                <div
                  className={`${styles.flexHorizontal} ${styles.marginTop200} ${styles.marginBottom200} ${styles.flexHelper}`}
                >
                  <ErrorCard />
                </div>
                <div
                  style={{ height: "1px" }}
                  // pga margin ovan :/
                ></div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.pageSelection}>
            <div className={styles.pageSelectionWrapper}>
              <div className={styles.widthDefault}>
                <div
                  className={`${styles.flexHorizontal} ${styles.marginTop100} ${styles.jobContent}`}
                >
                  <div className={styles.flexChild}>
                    <i className={styles.jobImgWrapper}>
                      <img
                        className={styles.fieldImg} //TODO FIXA BILD DYNAMISKT
                        src={defaultImg}
                        alt="placeholder"
                      />
                    </i>
                  </div>
                  <div className={styles.jobTextFlex}>
                    <h3>{this.renderRole()}</h3>
                    <div>{this.renderJobDescription()}</div>
                    <Link to={"/recruit"}>
                      <div className={styles.backToRecruitButton}>
                        <img
                          className={styles.arrowImg}
                          src={arrow}
                          alt="placeholder"
                        />
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
                      <h4 className={styles.descriptionHeader}>
                        What you'll be doing
                      </h4>
                      <ul className={styles.listContainer}>
                        {this.renderDoing()}
                      </ul>
                    </div>
                    <div>
                      <h4 className={styles.descriptionHeader}>
                        What you should have
                      </h4>
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
                  <div>
                    <div
                      onClick={() => this.setState({ modal: true })}
                      className={styles.backToRecruitButton}
                    >
                      Apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>{this.maybeRenderForm()}</div>
        </>
      );
    }
  }

  renderRole() {
    if (this.state.jobData !== undefined) {
      return this.state.jobData.role;
    }
  }

  renderJobDescription() {
    if (this.state.jobData !== undefined) {
      if (this.state.jobData.jobDescription !== undefined) {
        return this.state.jobData.jobDescription.map(e => {
          return (
            <div key={e} className={styles.stycke}>
              {e}
            </div>
          );
        });
      }
    }
  }

  renderDoing() {
    if (this.state.jobData !== undefined) {
      if (this.state.jobData.doing !== undefined) {
        return this.state.jobData.doing.map(e => {
          return <li key={e}>{e}</li>;
        });
      }
    }
  }

  renderShouldHave() {
    if (this.state.jobData !== undefined) {
      if (this.state.jobData.shouldHave !== undefined) {
        return this.state.jobData.shouldHave.map(e => {
          return <li key={e}>{e}</li>;
        });
      }
    }
  }

  renderBonus() {
    if (this.state.jobData !== undefined) {
      if (this.state.jobData.bonus !== undefined) {
        return this.state.jobData.bonus.map(e => {
          return <li key={e}>{e}</li>;
        });
      }
    }
  }

  maybeRenderForm() {
    if (this.state.modal) {
      return (
        <ApplicationForm
          onModalClose={this.modalCloseHandler.bind(this)}
          onFormChange={form => this.setState({ formData: form })}
          formData={this.state.formData}
        />
      );
    }
    return null;
  }

  modalCloseHandler() {
    this.setState({ modal: false });
  }

  render() {
    console.log("formdataJob: " + this.state.formData.job);
    return <div className={styles.first}>{this.renderContent()}</div>;
  }
}

export default Task;
