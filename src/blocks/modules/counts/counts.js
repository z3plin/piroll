import {
    CountUp
} from "countup.js";

const options = {
    duration: 4,
};

let countsSection = document.getElementById('counts');

window.addEventListener('scroll', function() { 
    isScrolledIntoView(countsSection);
    let projects = new CountUp('countProjects', 548, options);
    let hours = new CountUp('countHours', 1465, options);
    let feedbacks = new CountUp('countFeedbacks', 612, options);
    let clients = new CountUp('countClients', 735, options);
    projects.start();
    hours.start();
    feedbacks.start();
    clients.start();
    
    // if (!projects.error && !hours.error && !feedbacks.error && !clients.error && isScrolledIntoView(countsSection)) {
    // } else {
    //     console.log(countsSection.getBoundingClientRect());
    // };
});

function isScrolledIntoView(countsSection) {
    var rect = countsSection.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible; 
};