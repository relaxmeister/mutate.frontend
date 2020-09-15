import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteJob } from "../../store/actions";

import styles from "./style.module.css";

import JobForm from "../../components/jobform/JobForm";

import trash from "../../assets/icons/trash.png";

const defaultData = {
  role: "",
  field: "",
  jobDescription: [],
  doing: [],
  shouldHave: [],
  bonus: []
};
/**
 * Visa list på alla applications med impl av CRUD
 * https://www.jobboard.io/2018/05/new-feature-all-applicants-list/
 */
const Applications = props => {
  const [selectedJob, setSelectedJob] = useState(undefined);
  const [applications, setApplications] = useState([]);
  const [jobList, setjobList] = useState([]);
  const [formData, setFormData] = useState(defaultData);
  const [modal, setModal] = useState(false);
  const [modifyOrCreate, setModifyOrCreate] = useState(undefined);

  useEffect(() => {
    console.log(jobList);
    console.log(props.auth.user.jwt);
  }, [jobList]);

  useEffect(() => {
    setjobList(props.job.jobs);
  }, [props.job.jobs]);

  useEffect(() => {
    // API HÄMTA ALLA APPLIC
    fetch(`http://localhost:8080/recruit/applications`, {
      method: "GET",
      //withCredentials: true,
      //credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${props.auth.user.jwt}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          var error = new Error(response.statusText || response.status)
          error.response = response
          return Promise.reject(error)
        }
      })
      .then(result => {
        console.log("appplications hämtade: ", result);

        setApplications(applications.concat(result));

        //this.setState({ loading: false, formData: newFormData });
        //console.log(applications);
        return result;
      })
      .catch(err => {
        //this.setState({ loading: false, error: true });
        console.log("error:" + err);
      });
  }, []);

  useEffect(() => {
    console.log("appli: ", applications);
  }, [applications]);

  //kanske modal för factory?
  const renderJobs = () => {
    return jobList
      .sort((a, b) => a.id - b.id)
      .map((e, index) => {
        return (
          <div key={index} className={styles.jobSection}>
            {/*applications.map(x => console.log("xID", x.id))*/}
            <div className={styles.jobContainer}>
              <p className={styles.jobHeader}>
                {e.id}: {e.role}
              </p>
              <div className={styles.flexContainer}>
                <div
                  onClick={() => {
                    setFormData(e);
                    setModifyOrCreate("modify");
                    console.log(e);
                    setModal(true);
                  }}
                  className={styles.modifyButton}
                >
                  Modify
                </div>
                <div
                  className={styles.deleteButton}
                  onClick={() => props.deleteJob(e.id, props.auth.user.jwt) /*onDeleteJob(e.id)*/}
                >
                  <img className={styles.trashcan} src={trash} alt="delet" />
                </div>
              </div>
            </div>
            <div className={styles.applicantBar}>
              <div className={styles.boldText}>
                Total Applicants{" "}
                {applications.filter(x => x.job.id === e.id).length}
              </div>
              <div className={styles.boldText}>Actions</div>
            </div>
            {renderApplications(e.id)}
          </div>
        );
      });
  };

  const renderApplications = jobId => {
    let appl = applications.filter(e => e.job.id === jobId);

    return appl
      .sort((a, b) => a.id - b.id)
      .map((app, index) => {
        return (
          <div className={styles.jobContainer} key={index}>
            <div className={styles.applicantHeader}>APPLICANT id {app.id}</div>
            <div className={styles.flexContainer}>
              <div className={styles.infoContainer}>
                <div>
                  <b>Name of the applicant</b>
                </div>
                <div>
                  {app.name} {app.lastname}
                </div>
                <div>
                  <b>Why I would like to work at this company:</b>
                </div>
                <div>{app.reasoning}</div>
              </div>
              <div
                className={styles.deleteButton}
                onClick={() => onDeleteApplication(app.id)}
              >
                <img className={styles.trashcan} src={trash} alt="delet" />
              </div>
            </div>
          </div>
        );
      });
  };

  const onDeleteJob = id => {
    //API DELETE JOB
    fetch(`http://localhost:8080/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${props.auth.user.jwt}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("SUCCESSFULLY DELETED");
        setjobList(jobList.filter(e => e.id !== id));
        //window.location.reload(true);
      })
      .catch(err => {
        //this.setState({ loading: false, error: true });
        console.log("error:" + err);
      });
  };

  const onDeleteApplication = id => {
    //API DELETE APPLIC
    fetch(`http://localhost:8080/recruit/applications/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${props.auth.user.jwt}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("SUCCESSFULLY DELETED"); // KÖRS ÄVEN VID 500
        //applications.filter(e => e.id === id)
        setApplications(applications.filter(e => e.id !== id));
        console.log("appl", applications);
        console.log(
          "applfilter",
          applications.filter(e => e.id !== id)
        );
        //window.location.reload(true);
      })
      .catch(err => {
        //this.setState({ loading: false, error: true });
        console.log("error:" + err);
      });
  };

  const onOpenJobFactory = () => {};

  const onCreateNewJob = () => {
    //typ egentligen bara byta sida, till samma som modify-sidan
  };

  const modalCloseHandler = () => {
    setModal(false);
    document.body.style.overflow = "visible";
    setModifyOrCreate(undefined);
    const newFormData = {
      role: "",
      field: "",
      jobDescription: [],
      doing: [],
      shouldHave: [],
      bonus: []
    };
    setFormData(newFormData);
  };

  const maybeRenderForm = () => {
    if (modal) {
      return (
        <JobForm
          onModalClose={modalCloseHandler}
          onFormChange={form => setFormData(form)}
          formData={formData}
          action={modifyOrCreate}
        />
      );
    }
  };

  return (
    <div className={styles.styleMe}>
      <div className={styles.overhead}>CURRENTLY OPEN POSITIONS</div>
      {renderJobs()}
      <div
        onClick={() => {
          setModifyOrCreate("create");
          setModal(true);
        }}
        className={styles.backToRecruitButton}
      >
        Create New Job
      </div>
      <div>{maybeRenderForm()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  job: state.job,
  auth: state.auth
});

export default connect(mapStateToProps, {
  deleteJob
})(Applications);
