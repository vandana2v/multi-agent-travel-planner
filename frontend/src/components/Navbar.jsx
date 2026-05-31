export default function Navbar() {

  return (

    <div className="w-full flex justify-between items-center px-10 py-6 absolute top-0 z-50">

      <h1 className="text-3xl font-bold">
        Voyanta <span className="text-purple-500">AI</span>
      </h1>

      <button className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700">
        Plan My Trip
      </button>

    </div>
  )
}