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
    
    // 100文字を超えるなら
    if (text.value.length > 100) {
        // alertクラスを加える
        count.classList.add('alert');
        // そうでないなら（100文字以下なら）
    } else {
        // alertクラスを外す
        count.classList.remove('alert')
    }
});
