import { useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TravelForm from "../components/TravelForm"
import ResultSection from "../components/ResultSection"
import Loader from "../components/Loader"

import BackgroundParticles from "../3d/BackgroundParticles"

export default function Home() {

  const [tripData, setTripData] = useState(null)
  const [loading, setLoading] = useState(false)

  const generateTrip = async (formData) => {

    try {

      setLoading(true)

      const response = await axios.post(
        "http://localhost:8000/generate-trip",
        formData
      )

      setTripData(response.data)

    } catch (error) {

      console.log(error)

      alert("Failed to generate trip")

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="relative min-h-screen overflow-hidden text-white">

      <BackgroundParticles />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">

        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen px-4">

          <Hero />

          <div className="w-full max-w-2xl mt-10">
            <TravelForm generateTrip={generateTrip} />
          </div>

          {loading && (
            <div className="mt-10">
              <Loader />
            </div>
          )}

          {tripData && (
            <div className="w-full max-w-5xl mt-16">
              <ResultSection tripData={tripData} />
            </div>
          )}

        </div>

      </div>

    </div>
  )
}