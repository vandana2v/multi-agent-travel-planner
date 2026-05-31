import { useState } from "react"

export default function TravelForm({ generateTrip }) {

  const [destination, setDestination] = useState("")
  const [days, setDays] = useState("")
  const [budget, setBudget] = useState("")
  const [interests, setInterests] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    generateTrip({
      destination,
      days: Number(days),
      budget: Number(budget),
      interests: interests.split(",")
    })
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-lg bg-white/10 border border-purple-500/30 p-10 rounded-3xl shadow-2xl"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Plan Your Journey
      </h2>

      <div className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="p-5 rounded-2xl bg-black/40 border border-purple-500/30 outline-none"
        />

        <input
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="p-5 rounded-2xl bg-black/40 border border-purple-500/30 outline-none"
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="p-5 rounded-2xl bg-black/40 border border-purple-500/30 outline-none"
        />

        <input
          type="text"
          placeholder="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="p-5 rounded-2xl bg-black/40 border border-purple-500/30 outline-none"
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition-all p-5 rounded-2xl text-xl font-bold"
        >
          Generate AI Trip
        </button>

      </div>

    </form>
  )
}