// post-send, Test
import Layout from './Layout';
//
export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">JsonParse.tsx</h1>
      <hr className="my-2" />
      <form
      hx-post="/api/test/test"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on--before-request="console.log('#before_post')"
      hx-on--after-request="afterPostForm1()"
      >
        <input type="text" 
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        name="name" />
        <button 
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        type="submit">Add</button>
      </form>
      <hr />
      <h3 id="resulte_form1">ここに表示</h3>
    </div>
      {/* script */}
      {(process.env.NODE_ENV === "develop") ? (
        <script src="/static/JsonParse.js"></script>
    ): (
        <script src="/public/static/JsonParse.js"></script> 
    )}
  </Layout>
  )
}
/*
*/
