import React, { Component } from 'react';

import styles from './style.module.css';

import JobOpeningCard from '../../components/jobopeningcard/JobOpeningCard';

const jobOpenings = [
    {
        id: "1",
        role: "Senior UI/UX Designer",
        field: "Design", //conditional image beroende på field
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "1",
        role: "Senior UI/UX Designer",
        field: "Design", //conditional image beroende på field
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
        role: "Frontend Developer",
        field: "Engineer",
        description: "Lots of text",
        requirements: "Lots of dots",
        plusPoints: "More dots",
    },
    {
        id: "2",
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

    renderOpenPositions() {
        if (true) {
            return jobOpenings.map(e => <JobOpeningCard key={e.id} album={e}/>);
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
                        <p>START / JOBS</p>
                    </div>
                    <div className={styles.aboutMutate}>
                        <p>Work at MUTATE</p>
                        <p>MUTATE is always looking for talented and self-motivated individuals with the capability and drive to help create the greatest engine in the world.</p>

                        <p style={{ marginBottom: 40 }}>It doesn’t matter if you’re a mod maker or a senior developer with fifteen years of experience; we are on the lookout for creative,
                        committed and interesting people who aren’t afraid to fail. We want people who love to take chances, roll with the punches, and accept challenges.
                        And we want people that truly believe they can make our products and our company the best in the industry.</p>
                    </div>
                </div>
                <div className={styles.jobsContainer}>
                    <p className={styles.jobHeader}>Open Positions</p>
                    <div className={styles.jobCardsContainer}>
                    {this.renderOpenPositions()}
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