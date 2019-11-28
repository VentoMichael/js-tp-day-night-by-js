document.documentElement.classList.add('js-enabled');

let toggleDN = document.querySelector('.tumbler__wrapper');
let post = document.querySelectorAll('.post');
let tumbler = document.querySelector('.tumbler');

function toggleFn() {
    if (toggleDN) {
        document.body.classList.toggle('body--night-mode');
        tumbler.classList.toggle('tumbler--night-mode');
        for (let i = 0; i < post.length; i++) {
            post[i].classList.toggle('post--night-mode');
        }
    }
}

toggleDN.addEventListener('click', toggleFn);