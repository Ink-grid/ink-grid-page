/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import DomainIcon from "@material-ui/icons/Domain";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import ClearIcon from "@material-ui/icons/Clear";

import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import LocalAirportRoundedIcon from '@material-ui/icons/LocalAirportRounded';
import PhonelinkRoundedIcon from '@material-ui/icons/PhonelinkRounded';
import RowingRoundedIcon from '@material-ui/icons/RowingRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import DirectionsBoatRoundedIcon from '@material-ui/icons/DirectionsBoatRounded';

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import logo from '../../../src/logo.png';
import logoB from '../../../src/logo-dark.png';
import "./style.css";
import "./menu.css";  

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
   
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }
  
  
  const sideList = side => (
    <div className={classes.list} role="presentation">
      <List className="top-lista">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          
          }}
        >
          <div
            style={{
              textAlign: "center",
              borderRightStyle: "groove",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30%"
            }}
          >
            {/* Boton del SideList 'X' */}
            <ClearIcon
              style={{ fontSize: "3em" }}
              onClick={handleDrawerClose}
              className="IconoX"
            />
          </div>

          <div style={{ width: "70%", textAlign: "center" }}>
            <img
              width="100"
              height="50"
              src={logoB}
              alt="ink-grid"
            />
          </div>
        </div>
      </List>

      <Divider />
      {/* Barra lateral */}
      <List>
        <Link to="/nosotros" className="item-enlaces">
          <ListItem className="link_item"     onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <GroupIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Nosotros" />
          </ListItem>
        </Link>

        <Link to="/hyper"  className="item-enlaces">
        <ListItem className="link_item"  onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <DomainIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Hyper" />
          </ListItem>
        </Link>

        <Link to="/blog" className="item-enlaces" >
          <ListItem className="link_item"   onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <ImportContactsIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Blog" />
          </ListItem>
        </Link>



        <a href="https://www.facebook.com/InkGridx" target="_blank" className="item-enlaces">
          <ListItem className="link_item"  onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <FacebookIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Facebook" />
          </ListItem>
        </a>
        <a href="https://www.twitter.com" target="_blank" className="item-enlaces">
          <ListItem className="link_item"  onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <WhatsAppIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="whatsapp" />
          </ListItem>
        </a>
        <a href="https://pe.linkedin.com" target="_blank" className="item-enlaces">
          <ListItem className="link_item"  onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <LinkedInIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText  className="link_text" primary="LinkedIn  " />
          </ListItem>
        </a>
      </List>
    </div>
  );

  const segundo = () => {
    const id = document.getElementById("prueba");
    id.style.display = "none";
  };

  return (
    <div class="">
      <nav class="nav-bar">
        <ul class="d-flex justify-content-center">

          <li className="menu-toogable">
            <i onClick={handleDrawerOpen} class="fas fa-bars"></i>
          </li>

          <li class="">
            <a class="logo-menu" href="/#inkgrid">
              <img
                width="100"
                height="50"
                src={logo}
                alt="ink-grid"
              />
            </a>
          </li>

          <li>
            Consultoría
            <div class="mega-menu">
              <div class="inner-mega-menu">
                <Link to="/prueba"> <p><CastForEducationIcon/> Educación</p> </Link>
                <p><WhatshotRoundedIcon />Minería</p>
                <p><DirectionsBoatRoundedIcon />Comercio y Servicio</p>
              </div>
              <div class="inner-mega-menu">
                <p><LocalAirportRoundedIcon />Turismo</p>
                <p><OpacityRoundedIcon />Agua y Energía</p>
                <p><DepartureBoardIcon />Transporte</p>
              </div>
              <div class="inner-mega-menu">
                <p><PhonelinkRoundedIcon />Tecnología</p>
                <p><RowingRoundedIcon />Logistica y Exportación</p>
              </div>
            </div>
          </li>
          <li>
            Capacitación
            <div class="mega-menu">
              <div class="inner-mega-menu">
                <p>Capacitación 1</p>
                <p>Capacitación 2</p>
                <p>Capacitación 3</p>
              </div>
              <div class="inner-mega-menu">
                <p>Capacitación 1</p>
                <p>Capacitación 2</p>
                <p>Capacitación 3</p>
              </div>
              <div class="inner-mega-menu">
                <p>Capacitación 1</p>
              </div>
            </div>
          </li>
          <li>
            Servicios PRO
            <div class="mega-menu">
              <div class="inner-mega-menu">
                <p>Servicio 1</p>
              </div>
              <div class="inner-mega-menu">
                <p>Servicio 2</p>
              </div>
              <div class="inner-mega-menu">
                <p>Servicio 3</p>
              </div>
            </div>
          </li>
          <li>blog</li>

          <li class="icono-user"><AccountCircleRoundedIcon /></li>
        </ul>

        {/* DRAWER -- Menu de opciones */}

        <Drawer open={state} onClose={handleDrawerClose}>
          {sideList("left")}
        </Drawer>

      </nav>
    </div>
  );
};

export default Navbar;
