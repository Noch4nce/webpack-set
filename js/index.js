import '../styles/css/style.css';
import '../styles/scss/main.scss';
import images from '../assets/image/bg.png';

function add() {
    let count = 0;
    count += 10;
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', `<img src=${images}>`);
}
add();
