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

// const jobDetails = {
//     1 : {
//         "title" : "Fruuuuntend"
//     },
//     2 : {
//         "title" : "buuuend"
//     }
// }

const jobDetails = [
    {
        title: "Fruuuuntend" // visst, pga arrayen ovan missar index 0...
    },
    {
        title: "buuuend"
    },
    {
        title : "brööööl"
    }
]

export function getJobsOpening() {
    return Promise.resolve(jobOpenings);
}

export function getJobDetails(id) {
    return Promise.resolve(jobDetails[id]);
}