import { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Stack,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {  Link, Navigate, useHref, href  } from "react-router-dom";

import AppsIcon from "@mui/icons-material/Apps";
import GetInfoCustomer from "../../services/clientinfo.service.js";

function Client() {
  const token = localStorage.getItem("x_access_token");
  const getDataUser =(eltoken)=>{
    return GetInfoCustomer(eltoken)
  }
  useEffect(() => {
    console.log("data del login xd", getDataUser(token));
  }, [token]);

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <AppsIcon href="/client"/>
          </IconButton>
          <Typography variant='h7' component='' sx={{flexGrow: 1}} padding={3}>
          <Button color='inherit' href="/client">Client # ID</Button>
          </Typography>
          <Stack direction='row' spacing={3} edge='end'>
            <Button color='inherit' href="/client/delivery_man">Delivery Man</Button>
            <Button color='inherit' href="/client/my_products">My Products</Button>
            <Button color='inherit' href="/client/in_way">In Way</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <div>
        <div>respuesta server:</div>
      </div>
    </div>
  );
}

export default Client;
