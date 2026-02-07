function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', () => check(email));

    function check(email)
    {
        let pattern = /[a-z]+@[a-z]+.[a-z]+/;

        if(!pattern.test(email))
        {
            email.classList.toggle('error');
        }
    }
}