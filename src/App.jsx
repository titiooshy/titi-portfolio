function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="p-6 text-red-600 text-3xl font-bold">
        TitiFlix
      </nav>

      <header className="px-10 h-[80vh] flex items-center">
        <div>
          <h1 className="text-6xl font-bold mb-4">
            Titilayo Oshinowo
          </h1>

          <p className="text-gray-300 max-w-xl text-lg">
            Engineer, designer, researcher, and storyteller.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold">
              View Projects
            </button>

            <button className="bg-gray-700 px-6 py-2 rounded">
              About Me
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
