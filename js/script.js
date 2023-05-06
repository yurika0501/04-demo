const btn = document.querySelector('#btn');
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