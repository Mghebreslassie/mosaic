
let options = {
    threshold: 0.3,
    rootMargin: "-150px"
}

function fix(element) {
    element.target.querySelector('IMG').setAttribute('src','facebook.png');
    $('element.target IMG').fadeIn();
}
let observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        console.log(entry.target);
        if (entry.isIntersecting == true) {
            entry.target.classList.add('colorChange');
            entry.target.querySelector('IMG').setAttribute('src','facebook.png');
            entry.target.querySelector('IMG').classList.add('showMe');
            observer.unobserve(entry.target);
        }
        
    })
}, options);

function appear() {
    document.getElementById('progress-bar').classList.add('levelFive');
}

let element = document.querySelector('#onlyDiv');
observer.observe(element);

function showText() {
    document.getElementById('testText').classList.remove('hiddenText');
    document.getElementById('testText').classList.add('one-text');
    console.log('hello world');
}