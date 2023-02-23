import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL, BASE_URL } from "../../global/Constant";
import apiFunctions from "../../global/GlobalFunction";
import PaymentSuccessModal from "./Modal/PaymentSuccessModal";

const Payment = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  let userId = searchparams.get("userId");
  let orderId = searchparams.get("orderId");
  let subTotal = searchparams.get("subTotal");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  console.log(userId);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  console.log(paymentMethod, "ggg");
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
    try {
      let paymentData = {
        userId: userId,
        order_Id: orderId,
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
          console.log(res.data);

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
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {isPaymentSuccessful ? (
            <PaymentSuccessModal
              email={email}
              phoneNumber={phoneNumber}
              paymentMethod={paymentMethod}
              transactionId={transactionId}
              amount={subTotal}
              userId={userId}
            />
          ) : (
            <div>
              <h3>Make a Payment</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="value">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option>Select a payment method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">Paypal</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </Form.Select>
                </Form.Group>

                {/* {paymentMethod === "creditCard" && (
              <div>
                <h5>Credit Card Information</h5>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter card number" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="expiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" placeholder="Enter CVV" />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )} */}

                <Form.Group controlId="transactionId">
                  <Form.Label>Transaction ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter transaction ID"
                    value={transactionId}
                    disabled={true}
                  />
                </Form.Group>

                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={subTotal}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={true}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={makePayment}>
                  Pay Now
                </Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;