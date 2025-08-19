const LAST_VISIT_TIME_NAME = 'last_visit_time';
const DIFFERENCE_IN_SECONDS = 10;
const BONUS = 10;
const p = document.querySelector('#reward');

const lastVisitTime = JSON.parse(localStorage.getItem(LAST_VISIT_TIME_NAME));

if (!lastVisitTime) {
    localStorage.setItem(LAST_VISIT_TIME_NAME, JSON.stringify(new Date()));
} else {
    const savedTime = new Date(lastVisitTime);
    const currentTime = new Date();
    const diff = Math.floor((currentTime - savedTime) / 1000);

    if (diff > DIFFERENCE_IN_SECONDS) {
        const [price, currency] = p.innerText.split(' ');
        p.innerText = `${+price + BONUS} ${currency}`
    }
    localStorage.setItem(LAST_VISIT_TIME_NAME, JSON.stringify(new Date()));
}
