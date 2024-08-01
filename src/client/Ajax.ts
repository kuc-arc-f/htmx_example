console.log("#  Ajax.ts");

/**
 *
 * @param
 *
 * @return
 */  
function getInputValue(idName: string){
  try{
    const form = document.getElementById(idName);
    // フォーム内の全てのINPUT要素を取得
    if(!form){ return {}; }
    const inputs = form.getElementsByTagName('input');
    // 各INPUT要素のname属性を取得して表示
    const data = {};
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].name);
        data[inputs[i].name] = inputs[i].value;
    }
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Error, getInputValue");
  }
}
/**
 *
 * @param
 *
 * @return
 */  
function testAjax(){
  try{
console.log("#testAjax");
    const inputValue = getInputValue("form1");
    console.log(inputValue);
    htmx.ajax('POST', '/api/test/test', {
      target: '#resulte_form1', swap: 'innerHTML', values: inputValue
    }).then(() => {
      console.log('Content inserted successfully!');
    });
  } catch (e) {
    console.error(e);
  }
}
