const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    //クリックされたときの処理
    document.body.classList.toggle('dark-theme');
});