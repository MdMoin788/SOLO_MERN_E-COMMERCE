import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Addpayment } from "../../Redux/Action/Cart.Action";

export default function PaymentForm() {

  const dispatch = useDispatch()
  const [payload, setPayload] = React.useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    saveCard: "",
  });
  const PaymentInput = (e) => {
    let { id, value } = e.target
    setPayload({ ...payload, [id]: value })




  }
  console.log('payload', payload);
  let data = payload
  dispatch(Addpayment(data))
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={PaymentInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={PaymentInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={PaymentInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={PaymentInput}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" id="saveCard" value="yes" />}
            label="Remember credit card details for next time"
            onChange={PaymentInput}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}