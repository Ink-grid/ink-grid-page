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

import GroupIcon from "@material-ui/icons/Group";
import DomainIcon from "@material-ui/icons/Domain";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ClearIcon from "@material-ui/icons/Clear";

import SchoolIcon from '@material-ui/icons/School';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import LocalAirportRoundedIcon from '@material-ui/icons/LocalAirportRounded';
import PhonelinkRoundedIcon from '@material-ui/icons/PhonelinkRounded';
import RowingRoundedIcon from '@material-ui/icons/RowingRounded';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import logo from "../../../src/logo.png";
import logoB from "../../../src/logo-dark.png";
import "./style.css";
import "./menu.css";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuR = () => {
    let btnmenu = document.getElementById("btn-menu");
    let menu = document.getElementById("nav");

    menu.classList.toggle("contenedor-menu");
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <List className="top-lista">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
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
            <img width="100" height="50" src={logoB} alt="ink-grid" />
          </div>
        </div>
      </List>

      <Divider />
      {/* Barra lateral */}
      <List>
        <Link to="/nosotros" className="item-enlaces">
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <GroupIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Nosotros" />
          </ListItem>
        </Link>

        <Link to="/hyper" className="item-enlaces">
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <DomainIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Hyper" />
          </ListItem>
        </Link>

        <Link to="/blog" className="item-enlaces">
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <ImportContactsIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Blog" />
          </ListItem>
        </Link>

        <a
          href="https://www.facebook.com/InkGridx"
          target="_blank"
          className="item-enlaces"
        >
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <FacebookIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="Facebook" />
          </ListItem>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="item-enlaces"
        >
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <WhatsAppIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="whatsapp" />
          </ListItem>
        </a>
        <a
          href="https://pe.linkedin.com"
          target="_blank"
          className="item-enlaces"
        >
          <ListItem className="link_item" onClick={handleDrawerClose} button>
            <ListItemIcon>
              {" "}
              <LinkedInIcon className="link_icono" />
            </ListItemIcon>
            <ListItemText className="link_text" primary="LinkedIn  " />
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
      {/* habur */}
      <div class="wrapper-burger" onClick={menuR} id="btn-menu">
        <div class="burger"></div>
      </div>
      {/* fin hamb */}

      <ul id="nav" class="contenedor-menu">
        {/* logo-X */}
        <li className="menu-toogable d-none d-sm-block">
            <i onClick={handleDrawerOpen} class="fas fa-bars"></i>
          </li>

          <li class="d-none d-lg-block">
            <a class="logo-menu" href="/#inkgrid">
              <img
                width="100"
                height="50"
                src={logo}
                alt="ink-grid"
              />
            </a>
          </li>

        {/* fin logo-x */}
        <li class="aparecer-menu">
          <Link to="/nosotros"> <GroupIcon />Nosotros </Link>
        </li>

        <li class="aparecer-menu">
        <Link to="/hyper"> <DomainIcon />Hyper</Link>
        </li>

        <li>
        <Link to="/blog"> <ImportContactsIcon />BLog</Link>
        </li>

        {/*  */}
        <li>
          <a href="#s2"><CastForEducationIcon />Capacitaciones</a>
          <span id="s2"></span>
          <ul class="subs">
            <li>
              {/* <a href="#" className="bg-dark">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/capacitacion1"> <CastForEducationIcon />Capacitación 1</Link>
                </li>
              
              </ul>
            </li>
            <li>
              {/* <a href="#">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/capacitacion2"><CastForEducationIcon />Capacitación 2</Link>
                </li>
                
              </ul>
            </li>
            <li>
              {/* <a href="#">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/capacitacion3"><CastForEducationIcon />Capacitación 3</Link>
                </li>
              
              </ul>
            </li>

          </ul>
        </li>
        {/*  */}
 
        
        {/*  */}
        <li>
          <a href="#s1"><BusinessTwoToneIcon />Industria</a>
          <span id="s1"></span>
          <ul class="subs">
            <li>
              {/* <a href="#" className="bg-dark">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/educación"> <SchoolIcon />Educación</Link>
                </li>
                <li>
                <Link to="/minería"> <FastfoodIcon />Minería</Link>
                </li>
                <li>
                <Link to="/comercio-servicio"><ThumbsUpDownIcon />Comercio y Servicios</Link>
                </li>
              </ul>
            </li>
            <li>
              {/* <a href="#">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/turismo"><LocalAirportRoundedIcon />Turismo</Link>
                </li>
                <li>
                <Link to="/agua-energia"><OpacityRoundedIcon />Agua y Energía</Link>
                </li>
                <li>
                <Link to="/transporte"><DirectionsBusIcon />Transporte</Link>
                </li>
              </ul>
            </li>
            <li>
              {/* <a href="#">Opciones 1</a> */}
              <ul>
                <li>
                  <Link to="/tecnología"><PhonelinkRoundedIcon />Tecnología</Link>
                </li>
                <li>
                <Link to="/logística-exportación"><RowingRoundedIcon />Logística y Exportación</Link>
                </li>
              </ul>
            </li>

          </ul>
        </li>
        {/*  */}
        
        
        <li class="aparecer-menu">
          <a href="https://www.facebook.com/InkGridx"
          target="_blank" ><FacebookIcon />fb</a>
        </li>
       
        <li class="aparecer-menu">
          <a href="#"><LinkedInIcon />linked In</a>
        </li>
        <li class="aparecer-menu">
          <a href="#"><WhatsAppIcon />whatsapp</a>
        </li>

        {/* <li class="icono-user"><AccountCircleRoundedIcon /></li> */}
      </ul>

      {/*  */}

      <Drawer open={state} onClose={handleDrawerClose}>
          {sideList("left")}
        </Drawer>

        {/*  */}
    </div>
  );
};

export default Navbar;
