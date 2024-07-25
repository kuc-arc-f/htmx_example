console.log("# DialogOpen.ts");

const DIALOG_NAME1 = "modalDialog_1";
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
//
const DialogOpen ={
  beforePostForm1: function()  {
    try{
      console.log("#startProc: Login");
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
    } catch (e) {
      console.error(e);
    }
  },
  /**
  *
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      if(obj.resulte_code && obj.resulte_code === 200) {
        Util.dialogShow(DIALOG_NAME1);
      }
    } catch (e) {
      console.error(e);
      alert("Error, Save");
    }
  }
}
