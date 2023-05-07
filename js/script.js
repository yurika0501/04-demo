const btn = document.querySelector('#btn');
const text = document.querySelector('.text');
const count = document.querySelector('.count');

btn.addEventListener('click', () => {
    //クリックされたときの処理
    document.body.classList.toggle('dark-theme');
    // if ボタンのテキストが「ダークモードにする」になっているなら
    if (btn.textContent === 'ダークモードにする'){
        // クリックされたときに「ライトモード」に変更
        btn.textContent = 'ライトモードにする';
        
    // そうでないなら(「ライトモードにする」と表示されているなら
    } else {
        // クリックされたときに「ダークモードにする」に戻す
        btn.textContent = 'ダークモードにする';
    }
});

text.addEventListener('keyup', () => {
    // キー入力されたときの処理
    count.textContent = text.value.length;
})
