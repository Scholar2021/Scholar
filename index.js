window.addEventListener('DOMContentLoaded', () => {

    const img = document.querySelector("#logoImage"),
          text = document.querySelector("#textBar");
          timer = document.querySelector("#timer");
          infoBar = document.querySelector("#infoBar");
          firstLine = infoBar.querySelector("#firstLine");
          fbIco = infoBar.querySelector("#fbIco");
          instaIco = infoBar.querySelector("#instaIco");
          locationIco = infoBar.querySelector("#locationIco");
          secondLine = infoBar.querySelector("#secondLine");


    setTimeout(() => {
        img.classList.remove("logoImagePassive");
        img.classList.add("logoImageActive");
        text.classList.remove("hiddenTextBar");
        text.classList.add("activeTextBar");
        setTimeout(() => {
            timer.classList.remove("hiddenTimer");
            timer.classList.add("activeTimer");
            firstLine.classList.remove("hiddenFirstLine");
            firstLine.classList.add("activeLine", "activeFirstLine");
            setTimeout(() => {
                fbIco.classList.remove("hiddenFbIco");
                fbIco.classList.add("activeIco", "activeFbIco");
                setTimeout(() => {
                    instaIco.classList.remove("hiddenInstaIco");
                    instaIco.classList.add("activeIco", "activeInstaIco");
                    setTimeout(() => {
                        locationIco.classList.remove("hiddenLocationIco");
                        locationIco.classList.add("activeIco", "activeLocationIco");
                        setTimeout(() => {
                            secondLine.classList.remove("hiddenSecondLine");
                            secondLine.classList.add("activeLine", "activeSecondLine");
                        }, 200);
                    }, 200);
                }, 200);
            }, 1500);
        }, 1500);
    }, 1000);

    //Timer
    const deadline = '2021-09-15';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('#timer', deadline);

infoBar.addEventListener ("click", (event) => {
        const target = event.target;
        if (target && target.className == "fa fa-facebook") {
            window.open("https://www.facebook.com/profile.php?id=100071010881568", '_blank');
        }
        else if (target && target.className == "fa fa-instagram") {
            window.open("https://instagram.com/scholarcenter_armenia?utm_medium=copy_link", '_blank');
        }
        else if (target && target.className == "fa fa-map-marker"){
            window.open("https://yandex.ru/maps/10262/yerevan/house/YE0YcwNkS0AAQFpqfX5xcnhjbA==/?ll=44.545082%2C40.202902&z=18.08", '_blank');
        }
    });
});