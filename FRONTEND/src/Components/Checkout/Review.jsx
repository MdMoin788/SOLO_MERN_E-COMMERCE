import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
const payments = []
const addresses = [];
let buyNowCart = []
export default function Review() {
  const CheckoutData = useSelector((state) => state.products.checkout)
  const PaymentData = useSelector((state) => state.products.payment)
  const CartData = useSelector((state) => state.products.cart)
  const buyNows = useSelector((state) => state.products.buyNow)
  console.log('CartData', CartData);
  console.log('buyNows', buyNows);
  console.log('buyNows', buyNows.length);
  if (buyNows == "{}") {
    buyNowCart.push(CartData)
  }
  else {
    buyNowCart.push(buyNows)
  }
  let All_Price = 0;
  if (payments.length == 0) {
    payments.push(PaymentData)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {buyNowCart.map((product) => (
          <ListItem key={product.Brand} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.Brand} secondary={product.Description} />
            <Typography variant="body2">{product.Price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {CartData.map((e) => {
              All_Price = All_Price + +e.Price;
            })}
            {All_Price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{CheckoutData.firstName + CheckoutData.lastName}</Typography>
          <Typography gutterBottom>{CheckoutData.address1}</Typography>
          <Typography gutterBottom>{CheckoutData.city}</Typography>
          <Typography gutterBottom>{CheckoutData.state + " " + CheckoutData.zip}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.cardName}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.cardNumber}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}