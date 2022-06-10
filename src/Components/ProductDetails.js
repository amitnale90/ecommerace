import { Send } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  CardContent,
  CssBaseline,
  Box,
  Paper,
  Button
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {ADD} from "../Redux/actions/action"


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const history = useHistory();

  const dispatch = useDispatch();

  const send = (e) =>{
    dispatch(ADD(e));
  }
  useEffect(() => {
    async function getProduct() {
      try {
        const product = await axios.get(`http://localhost:3333/products/${id}`);
        setProduct(product.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }

    getProduct();
  }, [id]);

  // function handleClick() {
  //   history.push("/")
  //  }
  return (
    <>
      <CssBaseline />
      <Container
        fixed
        sx={{
          m: 5,
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs>
            <div className="product__name">
              <Typography fontWeight="bold">{product.title}</Typography>
            </div>
            <Typography display="flex">{Array(product.rating)
            .fill()
            .map((_, i)=>(
            <p>⭐</p>
            ))}
            </Typography>
            <Box className="product__image" sx={{ boxShadow: 3 }}>
              <img src={product.image}  alt=""/>
            </Box>
            <div className="product__details">
              <div className="product__description">
                <CardContent>
                  <h2>Description:-</h2>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.desc}
                  </Typography>
                </CardContent>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="product__price"></div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  ml: 30,
                  width: 300,
                  height: 300,
                  position: "relative"
                },
              }}
            >
              <Paper elevation={10} >
              <Typography fontWeight="bold" textAlign="center" sx={{
                  m: 3,
                  mt: 3
                  
                  }}>Price of Product</Typography>
                  <Typography fontWeight="bold" textAlign="center" sx={{
                  m: 3,
                  mt: 3
                  
                  }}> ₹{product.price}</Typography>
                <Button variant="contained" href="#contained-buttons" sx={{
                  m: 10,
                  mt: 10
                  }}
                  onClick={()=>send(product)}
                  >
                  Add to Cart</Button>
                </Paper>
              
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* <button variant="contained" color="primary" onClick={handleClick}>Back to Home</button> */}
    </>
  );
};

export default ProductDetails;
