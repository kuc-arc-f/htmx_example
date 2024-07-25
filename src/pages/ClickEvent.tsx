import Layout from './Layout';

export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">ClickEvent</h1>
      <hr className="my-2" />
      <button 
      className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
      hx-on:click="alert('Clicked!')">Click</button>
      <hr className="my-2" />
    </div>
  </Layout>
  )
}
