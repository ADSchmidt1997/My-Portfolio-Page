window.onload = function() {
    const EFFECT = document.getElementById('headingName');

    window.addEventListener('scroll', scrollEffect);
    function scrollEffect() {
        if(window.scrollY>100) {
            EFFECT.classList.add('show');
        }
        else {
            EFFECT.classList.remove('show')
            
        }
    }
    scrollEffect();
}

function validateForm() {
    const validate = document.forms['myForm']['fname'].value;
    if(validate == "" || validate == null) {
        alert("Fill out the empty fields")
        return false;
    }
}