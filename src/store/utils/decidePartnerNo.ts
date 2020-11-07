const decidePartnerNo = (inputName:string) => {

  // 入力された名前を一文字ずつ配列に入れる
  var inputNameArray = inputName.split('');

  // 名前の配列をASCiiコードの配列に変換
  var charNumArray = inputNameArray.map(nameValue => nameValue.charCodeAt(0));

  // 計算
  let partnerNo = 0;
  charNumArray.forEach(value => partnerNo += value)

  // ここで相棒ポケモン決定（全ポケモンの数で割った余り）
  partnerNo = partnerNo % 802 ? partnerNo % 802 : 1;

  return partnerNo;

}
  
export default decidePartnerNo;
