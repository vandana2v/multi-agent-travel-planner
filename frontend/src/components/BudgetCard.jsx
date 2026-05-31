export default function BudgetCard({ budget }) {

  return (

    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-5">
        Budget Analysis
      </h2>

      <p className="text-5xl font-black text-green-400">
        ₹ {budget}
      </p>

    </div>
  )
}