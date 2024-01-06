import { Box, Grid } from "@mui/material";
import FreePlanIcon from "../../public/FreePlanIcon.svg";
import PaidPlanIcon from "../../public/PaidPlanIcon.svg";
import CheckIcon from "../../public/check-icon.svg";

const PricingCard = (props: {
  type: String;
  heading: String;
  price: String;
  features: Array<String>;
}) => {
  return (
    <div
      className="pricing-outer-div"
      style={{ backgroundColor: props.type === "basic" ? "#F2F7FC" : "#FFF" }}
    >
      {props.type === "basic" && (
        <div className="pricing-top-right-corner-div">
          <p>Most Popular</p>
        </div>
      )}
      <div className="pricing-header-div">
        <img
          src={props.type === "free" ? FreePlanIcon : PaidPlanIcon}
          alt={props.type === "free" ? "free-plan-icon" : "paid-plan-icon"}
        />
        <p className="pricing-header-heading">{props.heading}</p>
        <p className="pricing-header-price">{props.price}</p>
        <p
          className="pricing-header-supporting-text"
          style={{ visibility: props.type === "free" ? "hidden" : "visible" }}
        >
          Billed monthly.
        </p>
      </div>
      <Box
        className="pricing-content-div"
        sx={{ height: { xs: "172px", sm: "332px" } }}
      >
        <p className="pricing-content-heading">
          {props.type === "free" || props.type === "basic"
            ? "Features you'll love:"
            : props.type === "pro"
            ? "Everything in Basic Plus:"
            : "Everything in Pro Plus:"}
        </p>
        {props.features.map((feature) => {
          return (
            <div className="pricing-feature-line">
              <img src={CheckIcon} alt="check-icon" />
              <p className="pricing-feature-text">{feature}</p>
            </div>
          );
        })}
      </Box>
      <Box
        className="pricing-footer-div"
        sx={{
          boxShadow: {
            xs: "0px -4px 20px 0px rgba(0, 0, 0, 0.25)",
            sm: "none",
          },
        }}
      >
        <button
          onClick={() => alert("Free plan")}
          className="pricing-footer-button"
        >
          Get Started
        </button>
      </Box>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "24px" }}>
        <p className="pricing-main-heading">Plan and Pricing</p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <PricingCard
              type="free"
              heading="Free Trial"
              price="Free"
              features={[
                "Basic features & functionalities",
                "Upto 7 nodes/rooms",
                "Upto 5 Floor-Plans",
                "Rectangular shaped plans",
                "Corridors/Passage",
                "Non-dimensional only",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PricingCard
              type="basic"
              heading="Basic Plan"
              price="$35/mth"
              features={[
                "Upto 15 nodes/rooms",
                "Unlimited Floor-plans",
                "Rectangular shaped plans",
                "Corridors/Passage",
                "Dimensional",
                "Basic customization options",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PricingCard
              type="pro"
              heading="Pro Plan"
              price="$75/mth"
              features={[
                "Upto 30 nodes/rooms",
                "L, T, U and Z shaped plans",
                "Staircase shaped plans",
                "Custom shape of plots",
                "Customisation of Corridors",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PricingCard
              type="enterprise"
              heading="Enterprise plan"
              price="Custom"
              features={[
                "Unlimited nodes/rooms",
                "Personal Consultancy",
                "24x7 Expert support",
                "Client specific modifications",
                "Large-scale production",
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Pricing;
