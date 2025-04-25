const timer = (deadline) => {
  const timerDays = document.querySelectorAll(".count.count_1 span");
  const timerHours = document.querySelectorAll(".count.count_2 span");
  const timerMinutes = document.querySelectorAll(".count.count_3 span");
  const timerSeconds = document.querySelectorAll(".count.count_4 span");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerDays.forEach((span) => {
      span.textContent = getTime.days < 10 ? "0" + getTime.days : getTime.days;
    });

    timerHours.forEach((span) => {
      span.textContent =
        getTime.hours < 10 ? "0" + getTime.hours : getTime.hours;
    });

    timerMinutes.forEach((span) => {
      span.textContent =
        getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes;
    });

    timerSeconds.forEach((span) => {
      span.textContent =
        getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds;
    });

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    } else {
      timerDays.forEach((span) => (span.textContent = "00"));
      timerHours.forEach((span) => (span.textContent = "00"));
      timerMinutes.forEach((span) => (span.textContent = "00"));
      timerSeconds.forEach((span) => (span.textContent = "00"));
    }
  };
  updateClock();
};

export default timer;
