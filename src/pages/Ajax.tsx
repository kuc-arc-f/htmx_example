// post-send, Test
import Layout from './Layout';
//
export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">Ajax.tsx</h1>
      <hr className="my-2" />
      <form id="form1">
        <label>name1:</label>
        <input type="text" name="name1" className="ms-2" /><br />
        <label>name2:</label>
        <input type="text" name="name2" className="ms-2" /><br />
        <label>name3:</label>
        <input type="text" name="name3" className="ms-2" /><br />
      </form>
      <hr />
      <div id="resulte_form1">ここに表示</div>
      <hr />
      <button 
      className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
      hx-on:click="testAjax()">Click</button>
    </div>
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
    <>
      <script src="/static/Util.js"></script>
      <script src="/static/Ajax.js"></script>
    </>
    ): (
    <>
      <script src="/public/static/Util.js"></script>
      <script src="/public/static/Ajax.js"></script> 
    </>
    )}    
  </Layout>
  )
}
/*
*/
