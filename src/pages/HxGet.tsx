import Layout from './Layout';

export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">HxGet</h1>
      <hr className="my-2" />
      <button
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        hx-get="https://jsonplaceholder.typicode.com/users/1"
        hx-target="#h2"
      >
        Click
      </button>
      <hr className="my-2" />
      <h3 id="h2">ここに表示</h3>
    </div>
  </Layout>
  )
}
