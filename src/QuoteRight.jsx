import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const QuoteComponentRight = () => {
  return (
    <div style={{ textAlign: "end", padding: "20px", fontSize: "1rem" }}>
      <FontAwesomeIcon icon={faQuoteRight} size="2x" color="gray" />
      <p style={{ marginTop: "10px" }}></p>
    </div>
  );
};

export default QuoteComponentRight;
