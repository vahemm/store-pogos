import express from "express";
import bodyParser from "body-parser";
import clinetRoute from "./routes/client";
import sellerRoute from "./routes/seller";
import saleRoute from "./routes/sale";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/client", clinetRoute);
app.use("/seller", sellerRoute);
app.use("/sale", saleRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
