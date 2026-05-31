import { useState } from "react";
import axios from "axios";
import BackgroundParticles from "../3d/BackgroundParticles";

export default function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTrip = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/generate-trip",
        {
          destination,
          days: Number(days),
          budget: Number(budget),
          interests: interests.split(","),
        }
      );

      setResult(response.data.trip_plan);
    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <BackgroundParticles />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "700px",
            maxWidth: "95%",
            backdropFilter: "blur(15px)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "25px",
            padding: "40px",
            color: "white",
            boxShadow: "0 0 30px rgba(128,0,255,0.3)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            ✈️ Voyanta AI
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#ccc",
              marginBottom: "30px",
            }}
          >
            AI Powered Multi-Agent Travel Planner
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={inputStyle}
            />

            <input
              placeholder="Interests (food, culture, nightlife)"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              style={inputStyle}
            />

            <button
              onClick={generateTrip}
              style={{
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#7c3aed,#2563eb)",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {loading ? "Generating..." : "Generate AI Trip"}
            </button>
          </div>

          {result && (
            <div
              style={{
                marginTop: "40px",
                background: "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "15px",
                whiteSpace: "pre-wrap",
                lineHeight: "1.8",
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  outline: "none",
};