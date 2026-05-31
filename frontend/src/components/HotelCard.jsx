export default function HotelCard({ hotels }) {

  return (

    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-5">
        Hotels
      </h2>

      {
        hotels?.map((hotel, index) => (

          <div key={index} className="mb-6">

            <p className="text-xl font-semibold">
              {hotel.name}
            </p>

            <p className="text-zinc-400">
              ₹ {hotel.price}
            </p>

          </div>
        ))
      }

    </div>
  )
}