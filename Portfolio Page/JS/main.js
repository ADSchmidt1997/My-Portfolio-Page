window.onload = function() {
    const effects = document.querySelectorAll('.headingScroll');

    window.addEventListener('scroll', scrollEffect);
    function scrollEffect() {
        effects.forEach(function(el){
            if(window.scrollY>300) {
                el.classList.add('show');
            }
            else {
                el.classList.remove('show')
                
            }
        });
        }
    scrollEffect('.headingScroll');
}

function validateForm() {
    const validate = document.forms['myForm']['fname'].value;
    if(validate == "" || validate == null) {
        alert("Fill out the empty fields")
        return false;
    }
}
