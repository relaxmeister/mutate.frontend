import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobsOpening } from '../../services/api/ApiService';

import styles from './style.module.css';

import JobOpeningCard from '../../components/jobopeningcard/JobOpeningCard';
import FilterButton from '../../components/filterbutton/FilterButton';

class Recruit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobOpenings: [],
            checkedBox: 'All Openings',
        }

        this.changeCheckBox = this.changeCheckBox.bind(this);
        console.log("checkedbox: " + this.state.checkedBox);
    }

    //Vill sannolikt lägga in någon typ av filtrering för att komma i kontakt med state för
    //utmaningens skull
    componentDidMount() {
        // getJobsOpening().then((jobs) => {
        //     this.setState({
        //         jobOpenings: jobs
        //     })
        // });

        this.setState({
            jobOpenings: this.props.job.jobs
        })

        console.log("jobopeningens: " + this.state.jobOpenings)
        window.scrollTo(0, 0);

    }

    componentDidUpdate() {
    }

    renderOpenPositions() {

        // if (true) {
        //     return this.state.jobOpenings.map(e => <JobOpeningCard key={e.id} album={e} />);
        //     //return this.props.job.jobs.map(e => <JobOpeningCard key={e.id} album={e} />);
        //     //<jobOpenings key={e.id} props={e} />
        //     //});
        // }
        if (this.props.job.jobs !== null) {
            console.log("joblist: " + this.props.job.jobs);
            if (this.state.checkedBox === "All Openings") {
                return this.props.job.jobs.sort((a, b) => a.id - b.id).map(e => <JobOpeningCard key={e.id} album={e} />);
            } else {
                return this.props.job.jobs.sort((a, b) => a.id - b.id).filter(e => e.field === this.state.checkedBox).map(e => <JobOpeningCard key={e.id} album={e} />);
            }
        }//Vill antagligen ha ett errortest i samband med detta (success/error/no jobs)
        // if (this.state.jobOpenings !== null) {
        //     console.log("joblist: " + this.state.jobOpenings);
        //     return this.state.jobOpenings.sort((a, b) => a.id - b.id).map(e => <JobOpeningCard key={e.id} album={e} />);
        // }//Vill antagligen ha ett errortest i samband med detta (success/error/no jobs)
        return <div className={styles.noJobs}>There are currently no open positions :(</div>
    }

    changeCheckBox(checkboxName) {
        this.setState({
            checkedBox: checkboxName
        }, () => {
            this.handleChangeCheckBox(checkboxName);
        })
    }

    handleChangeCheckBox(checkboxName) {
        if (this.state.checkedBox === 'All Openings') {
            this.props.history.push("/recruit");
        } else {
            this.props.history.push(`${"?team=" + checkboxName.toLowerCase()}`);
        }
    }

    render() {
        return (
            <div className={styles.first}>
                <div className={styles.upperSection}>
                    <div className={styles.textContainer}>
                        <span className={styles.jobHeader}>Jobs</span>
                        <span className={styles.jobCatchphrase}>Give us your world and you will gain access to ours</span>
                    </div>
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.orientation}>
                        <p><Link to={"/"}>START</Link> / JOBS</p>
                    </div>
                    <div className={styles.aboutMutate}>
                        <p>Work at MUTATE</p>
                        <p>Mutate is always looking for talented and passionate individuals to join our expanding team in Stockholm.</p>

                        <p style={{ marginBottom: 40 }}>
                            You will be working with skilled colleagues and be part of an exciting project,
                            where we are creating a gaming engine and platform for the future.
                            If you can’t see your desired position listed, just send us your resume to jobs@mutate.se.
                        </p>
                    </div>
                </div>
                <div className={`${styles.flex} ${styles.flexHorizontal} ${styles.flexJustifyCenter} ${styles.flexAlignCenter} ${styles.flexWrap} ${styles.filterWrap}`}>
                    <div className={styles.buttonWrapOuter}>
                        <div
                            className={styles.buttonWrap} /*tabIndex={-1} whats the deal? blir klickable t.t*/
                            role={"radiogroup"}
                            aria-labelledby={"jobs_filter"}
                        >

                            <FilterButton text={"All Openings"} isBoxChecked={this.state.checkedBox} changeCheckBox={this.changeCheckBox} />
                            <div className={styles.divider} />
                            <FilterButton text={"Design"} isBoxChecked={this.state.checkedBox} changeCheckBox={this.changeCheckBox} />
                            <FilterButton text={"Engineering"} isBoxChecked={this.state.checkedBox} changeCheckBox={this.changeCheckBox} />
                            <FilterButton text={"Data"} isBoxChecked={this.state.checkedBox} changeCheckBox={this.changeCheckBox} />
                        </div>
                    </div>
                </div>
                <div className={styles.jobsContainer}>


                    <div className={styles.selectionWrapper}>
                        <div className={styles.widthDefault}>
                            <div className={styles.flexHorizont}>
                                <div className={styles.jobCardsFlexWrapper}>
                                    {this.renderOpenPositions()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Potentiell Sektion 3 med Perks? Ev något om flytt till stockholm?
                </div>
            </div>
        );
    } s
}

const mapStateToProps = (state) => ({
    placeholder: state.placeholder2,
    job: state.job,
});

export default connect(mapStateToProps, {})(Recruit);
