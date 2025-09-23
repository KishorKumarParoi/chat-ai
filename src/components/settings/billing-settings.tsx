import { onGetSubscriptionPlan } from "@/actions/settings";
import SectionLabel from "../section-label";

const BillingSettings = async () => {
  const plan = await onGetSubscriptionPlan();
  console.log("plan: ", plan);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing Settings"
          message="Add Payment information, upgrade and modify your plan"
        />
      </div>
    </div>
  );
};

export default BillingSettings;
