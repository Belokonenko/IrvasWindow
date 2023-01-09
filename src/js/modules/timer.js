const timer = (id, deadLine) => {
   
    setClock(id, deadLine);

    function getTimeRemaining(endLine) {
        let t = Date.parse(endLine) - Date.parse(new Date);
        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(((t / 1000) / 60) % 60);
        let hours = Math.floor(t / ((1000 * 60 * 60 )) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total' : t,
            'days'  : days,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector);
        
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock(){
            const t = getTimeRemaining(endTime);
            
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    }

    function addZero(num) {
        if (num <= 9) {
            return '0'+num;
        } else {
            return num;
        }
    }
}

export default timer;
