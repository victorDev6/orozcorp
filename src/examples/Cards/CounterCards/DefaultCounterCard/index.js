/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ count, title, subtitle, description, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" sx={{ color: "#DAA520" }}>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {subtitle && (
        <MKTypography variant="h6" mt={2} mb={1}>
          {subtitle}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "",
  description: "",
  title: "",
  subtitle: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  // color: PropTypes.oneOf([
  //   "primary",
  //   "secondary",
  //   "info",
  //   "success",
  //   "warning",
  //   "error",
  //   "light",
  //   "dark",
  // ]),
  color: PropTypes.string,
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default DefaultCounterCard;
