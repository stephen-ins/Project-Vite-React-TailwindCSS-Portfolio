import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteComponentLeft = () => {
  return (
    <div style={{ textAlign: "start", padding: "20px", fontSize: "1rem" }}>
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="gray" />
      <p style={{ marginTop: "10px" }}></p>
    </div>
  );
};

export default QuoteComponentLeft;
