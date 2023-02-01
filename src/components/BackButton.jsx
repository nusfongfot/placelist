import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import "./style.css";

function BackButton() {
  const navigate = useNavigate("");
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Button
        className="back-btn"
        variant="contained"
        sx={{
          marginTop: "20px",
          marginLeft: "100px",
          borderRadius: "30px",
          background: "#134B8A",
        }}
        onClick={gotoHome}
      >
        Back
      </Button>
    </div>
  );
}
export default BackButton;
