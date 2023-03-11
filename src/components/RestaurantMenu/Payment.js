import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import PaymentSuccessModal from "./Modal/PaymentSuccessModal";
import "../../App.css";

const Payment = () => {
  const img = {
    paymentGif: require("../Assets/payment gif.gif"),
  };

  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  let userId = searchparams.get("userId");
  let orderId = searchparams.get("orderId");
  let subTotal = searchparams.get("subTotal");
  let tableNumber = searchparams.get("tableNumber");
  let TableNumber = searchparams.get("TableNumber");
  let type = searchparams.get("type");
  let uniqueOrderId = searchparams.get("uniqueOrderId");

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
  };
  const toast = useToast();

  function generateRandomNumber() {
    let randomNumber = "";
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      if (i === 4 || i === 8 || i === 12) {
        randomNumber += "-";
      }
      randomNumber += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return randomNumber;
  }

  const makePayment = async () => {
    if (!email || !paymentMethod) {
      //alert("Please Enter All Fields");
      toast({
        position: "top",
        title: `Please Enter All Fields`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (
      !phoneNumber ||
      phoneNumber.length !== 11 ||
      !/^\d{11}$/.test(phoneNumber)
    ) {
      toast({
        position: "top",
        title: `Please Enter a Valid Phone Number with 11 digits`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      let paymentData = {
        userId: userId,
        order_Id: orderId,
        uniqueOrderId: uniqueOrderId,
        email: email,
        phone_Number: phoneNumber,
        payment_method: paymentMethod,
        transaction_id: transactionId,
        amount: subTotal,
        payment_status: "Success",
      };

      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.MAKE_PAYMENT + userId, paymentData)
        .then((res) => {
          if (res.status == 201) {
            setIsPaymentSuccessful(true);
            toast({
              position: "top",
              title: `Payment Created Successfully`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            // navigate("/Payment");

            return true;
          } else {
            toast({
              position: "top",
              title: `There some errors`,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            return false;
          }
        });
    } catch (err) {
      console.log(err);
      // toast({
      //   position: "top",
      //   title: `There Some Error`,
      //   status: "error",
      //   duration: 9000,
      //   isClosable: true,
      // });
    }
  };

  useEffect(() => {
    setTransactionId(generateRandomNumber());
  }, []);

  return (
    <Container
      style={{
        backgroundColor: "#fff",
      }}
      className="mb-3 container-fluid"
    >
      {isPaymentSuccessful ? (
        <PaymentSuccessModal
          email={email}
          phoneNumber={phoneNumber}
          paymentMethod={paymentMethod}
          transactionId={transactionId}
          amount={subTotal}
          userId={userId}
          tableNumber={tableNumber}
          TableNumber={TableNumber}
          type={type}
          uniqueOrderId={uniqueOrderId}
        />
      ) : (
        <Row>
          <div className="col-md-6 align-self-center">
            <img className="img-fluid" src={img.paymentGif} alt="gif" />
          </div>
          <div className="col-md-6">
            <h2 className="mt-2 py-2 text-large  text-center text-bold">
              Make a Payment
            </h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="+92123456789"
              />
            </div>

            <div className="form-group mb-3">
              <label for="exampleFormControlSelect1" className="form-label">
                Payment Method
              </label>
              <select
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Select Payment Method</option>
                <option>Credit Card</option>
                <option>Paypal</option>
                <option>Brank Transfer</option>
              </select>
            </div>

            <div className="mb-3">
              <input
                value={transactionId}
                disabled={true}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Transaction Id"
                hidden
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Enter Amount
              </label>
              <input
                value={subTotal}
                onChange={(e) => setAmount(e.target.value)}
                disabled={true}
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Amount"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center py-2">
              <button onClick={makePayment} type="button" className="Button">
                Pay Now
              </button>
            </div>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default Payment;
