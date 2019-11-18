import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

import JobOpeningCard from '../../components/jobopeningcard/JobOpeningCard';

const jobOpenings = [
    {
        id: "1",
        role: "Senior UI/UX Designer AND TROLOLRORLROL WOFF WOFF WOOF",
        field: "Design", //conditional image beroende på field
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Working Class Hero",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "3",
        role: "Please dont shake the baby",
        field: "Design", //conditional image beroende på field
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "4",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "5",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "6",
        role: "Freeloader",
        field: "Unknown",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "7",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "8",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "9",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "10",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "11",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
];

class Recruit extends Component {

    //Vill sannolikt lägga in någon typ av filtrering för att komma i kontakt med state för
    //utmaningens skull
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderOpenPositions() {
        if (true) {
            return jobOpenings.map(e => <JobOpeningCard key={e.id} album={e} />);
            //<jobOpenings key={e.id} props={e} />
            //});
        }
        return <div>There are currently no open positions :(</div>
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
                <div className={styles.jobsContainer}>
                    <p className={styles.jobHeader}>Open Positions</p>
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

export default Recruit;