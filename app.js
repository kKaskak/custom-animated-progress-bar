const progress = document.querySelector('.progress-done')
const btn = document.querySelector('button')
const text = document.querySelector('.text')


btn.addEventListener('click', function (e) {
    const calc = math();
    progress.setAttribute('data-done', calc)
    text.innerText = `${calc}%`;
    progress.style.width = progress.getAttribute('data-done') + '%'
    progress.style.opacity = 1;
});

const math = function math() {
    return Math.floor(Math.random() * 101)
}

