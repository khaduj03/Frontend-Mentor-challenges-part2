import "./pricingcard.css"
export default function PricingCard() {
  return (
    <div>
        <label htmlFor="range"></label>
        <input type="range" id="range" className="pricing_range" />
    </div>
  )
}