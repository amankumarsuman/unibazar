import Plans from "../../../../ChoosePlan/Plans";


export default function SubscriptionPlan() {
  return (
    <div className="w-full py-5">
      <Plans pricingType={'monthly'}/>
    </div>
  )
}