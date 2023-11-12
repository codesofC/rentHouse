
const GetStarted = () => {
  return (
    <section className="flex items-center justify-center relative">
      <div className="w-full bg-blue-600 mx-6 md:mx-8 lg:mx-12 xl:mx-48 py-8 px-3
                        flex flex-col items-center justify-center gap-4 rounded-lg">
        <h1  className="text-3xl text-white font-bold text-center">Get started with EASXY</h1>
        <p className="flex flex-col items-center justify-center gap-2 text-gray-300">
            <span className="text-center">Subscribe and find super attractive price quotes from us.</span>
            <span className="text-center">Find your residence soon</span>
        </p>
        <button className="flex items-center justify-center border-2 border-white text-white px-3 py-2 rounded-md bg-gray-50">
            Get Started
        </button>
      </div>
    </section>
  )
}

export default GetStarted