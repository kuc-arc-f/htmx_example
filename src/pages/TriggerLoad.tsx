import Layout from './Layout';
//
export default function Page() {
  return (
  <Layout>
    <h1 className="text-4xl font-bold">TriggerLoad.tsx</h1>
    <hr />
    <form
    hx-post="/api/test/test"
    hx-trigger="load"
    hx-target="#resulte_form1"
    >
      <label>name: </label><br />
      <input type="text" name="name" defaultValue={`name123`}/>
    </form>
    <hr />
    <h3 id="resulte_form1">ここに表示</h3>
  </Layout>
  )
}
/*
type="module"
*/
