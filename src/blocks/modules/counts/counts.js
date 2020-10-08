import {
    CountUp
} from "countup.js";

const options = {
    duration: 4,
};

let projects = new CountUp('countProjects', 548, options);
let hours = new CountUp('countHours', 1465, options);
let feedbacks = new CountUp('countFeedbacks', 612, options);
let clients = new CountUp('countClients', 735, options);

if (!projects.error && !hours.error && !feedbacks.error && !clients.error) {
    projects.start();
    hours.start();
    feedbacks.start();
    clients.start();
} else {
    console.error(demo.error);
}