import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Swiss Chalet - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
