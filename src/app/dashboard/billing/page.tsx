import BillingForm from "@/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const Page = async () => {
  const subscritpionPlan = await getUserSubscriptionPlan();

  return <BillingForm subscriptionPlan={subscritpionPlan} />;
};

export default Page;
