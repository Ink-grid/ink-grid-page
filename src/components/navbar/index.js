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
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"

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
    let menu = document.getElementById("menu-wrapper");

    menu.classList.toggle("aktif");
  };

  const esconderMenu = () => {
    let subMenu=document.getElementById("megaMenu");
    subMenu.style.display="none";
  }
  

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
            <img width="100" height="50" src={logoB} alt="Ink-grid" />
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
    <header id="headerblanter">
      <a href="#" id="showjalantikus" onClick={menuR} title="Show Navigation"><i class="material-icons"></i></a>
      <a href="#" id="showkacatikus" title="Show Search"><AccountCircleRoundedIcon /></a>

      <div className="header2 section" id="header2">
        <div class="widget Header" data-version="1" id="Header1">
          <div id="header-inner">

            <Link to="/" className="my-0 px-5" style={{ display: "block", paddingBottom: '200px' }}>
              <img alt="ink-grid" height="48px" className="mb-2" id="Header1_headerimg" src={logo} />
            </Link>
          </div>
        </div>
      </div>


      <div id="menu-wrapper">

        <div id="navigation">

          <ul>
            <li>
              <a className="blanter-nav" href="#" itemprop="url" title="industrias"><span itemprop="name">INDUSTRIAS</span></a>
              <div className="mega-wrapper" id="megaMenu">
                <div className="megamenu">
                  <ul className="taglabel">
                    {/*  */}
                    <Link to="/educacion" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" title="Sub menu 1xD" className="tagpost_thumb" src="https://www.bbva.com/wp-content/uploads/2015/12/bbva-educacion-e1464704439593-1024x424.jpg" />
                        <a className="blanco">Educación</a>
                      </li>
                    </Link>
                    {/*  */}

                    <Link to="/mineria" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://exsasoluciones.pe/wp-content/uploads/2018/06/Es-viable-la-miner%C3%ADa-sostenible-en-Per%C3%BA-800x445.jpg" />
                        <a className="blanco">Minería</a>
                      </li>
                    </Link>
                    {/*  */}
                    
                    <Link to="/comercio-servicio" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://st2.depositphotos.com/3623347/12076/v/950/depositphotos_120768024-stock-illustration-vector-delivery-service-concept-background.jpg" />
                        <a className="blanco">Comercio y Servicio</a>
                      </li>
                    </Link>
                    {/*  */}
                    
                    <Link to="/turismo" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://e.rpp-noticias.io/xlarge/2017/08/30/090909_472927.jpg" />
                        <a className="blanco">Turísmo</a>
                      </li>
                    </Link>
                    {/*  */}
                    <Link to="/agua-energia" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://www.proyectofse.mx/wp-content/uploads/2019/01/n5_ene_19-03-759x500.png" />
                        <a className="blanco">Agua y Energía</a>
                      </li>
                    </Link>
                    {/*  */}
                    <Link to="/transporte" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://www.elsoldemexico.com.mx/metropoli/valle-de-mexico/xy7ja9-transporte-horario-especial.jpg/ALTERNATES/LANDSCAPE_400/transporte-horario-especial.jpg" />
                        <a className="blanco">transporte</a>
                      </li>
                    </Link>
                    {/*  */}
                    
                    <Link to="/tecnologia" onClick={menuR} className="m-0 p-0 link-sub">
                      <li className="clearfix">
                        <img alt="Ink-Grid" className="tagpost_thumb" src="https://cdn-3.expansion.mx/dims4/default/abad06d/2147483647/strip/true/crop/1000x667+0+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff0%2F1d%2Fd0b7fd994e67a9f48564db5f7507%2Fistock-856757428-copy.jpg" />
                        <a className="blanco">Tecnología</a>
                      </li>
                    </Link>
                    {/*  */}
                    <Link to="/logistica-exportacion" onClick={menuR} className="m-0 p-0 link-sub">
                      <li class="clearfix">
                        <img alt="Ink-Grid" class="tagpost_thumb" src="https://encolombia.com/wp-content/uploads/2013/01/Exportaci%C3%B3n-de-Servicios.jpg" />
                        <a className="blanco">Logística y Exportación</a>
                      </li>
                    </Link>
                    {/*  */}


                  </ul>
                </div>
              </div>
            </li>

            {/*  */}
            {/*  */}
            {/*  */}
            <li>
              <a className="blanter-nav" href="#" itemprop="url" title="Games">
                <span itemprop="name">In Company</span>
              </a>
              <div className="mega-wrapper">


              </div>
            </li>

            {/*  */}
            {/*  */}
            {/*  */}

            <li>
              <a className="blanter-nav" href="#" itemprop="url" title="Tips &amp; Trik">
                <span itemprop="name">Servicios BPO</span>
              </a>
              <div className="mega-wrapper">


              </div>
            </li>
            <li>
              <a className="blanter-nav" href="#" itemprop="url" title="Gadget"><span itemprop="name">Proyectos</span></a>
            </li>
            <li>
              <Link to="/blog" onClick={menuR}><span itemprop="name">Blog</span></Link>
            </li>

          </ul>


        </div>
        <div id="menu-kiri" className="mx-0 mx-lg-5">
          <a className="blanter" href="javascript:;" id="showsearch" target="_blank" title="Show Search"><AccountCircleRoundedIcon /></a>

          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
