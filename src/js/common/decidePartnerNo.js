import hiraganaArray from '../../data/hiragana.json';

  const decidePartnerNo = () => {

    const inputName = document.getElementById('inputName');

    // 入力された名前を一文字ずつ配列に入れる
    var inputNameArray = inputName.value.split('');


    // ひらがなナンバーを含む配列をつくる
    var hiraganaNoArray = inputNameArray.map(nameValue => 
      hiraganaArray.filter(hiraganaValue => nameValue === hiraganaValue.char)
    )

  
    // 計算
    let partnerNo = 1;
    for (let i = 0; i < hiraganaNoArray.length; i++) {
      partnerNo *= hiraganaNoArray[i][0].number;
    }
  

    // ここで相棒ポケモン決定（全ポケモンの数で割った余り）
    partnerNo = (partnerNo + hiraganaNoArray.length) % 802

    return partnerNo;

  }

  
export default decidePartnerNo;
