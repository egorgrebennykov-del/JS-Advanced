function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => convert('days'));
    hoursBtn.addEventListener('click', () => convert('hours'));
    minutesBtn.addEventListener('click', () => convert('minutes'));
    secondsBtn.addEventListener('click', () => convert('seconds'));

    function convert(timeType)
    {
        const daysInput = document.getElementById('days').value;
        const hoursInput = document.getElementById('hours').value;
        const minutesInput = document.getElementById('minutes').value;
        const secondsInput = document.getElementById('seconds').value;

        let seconds;

        switch(timeType)
        {
            case 'days':
                seconds = daysInput * 86400;
                break;
            case 'hours':
                seconds = hoursInput * 3600;
                break;
            case 'minutes':
                seconds = minutesInput * 60;
                break;
            default:
                seconds = secondsInput;
                break;
        }

        let days = (seconds / 86400).toFixed(1);
        let hours = (seconds / 3600).toFixed(0);
        let minutes = (seconds / 60).toFixed(0);

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}