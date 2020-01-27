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

import "./style.css";
const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <List>
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
              onClick={() => toggleDrawer(false)}
              className="IconoX"
            />
          </div>

          <div style={{ width: "70%", textAlign: "center" }}>
            <img
              width="100"
              height="50"
              src="https://www.ink-grid.com/wp-content/uploads/2019/09/cropped-logo_new.png"
              alt="ink-grid"
            />
          </div>
        </div>
      </List>

      <Divider />

      <List>
        <Link to="/nosotros">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Nosotros" />
          </ListItem>
        </Link>

        <Link to="/hyper">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <DomainIcon />
            </ListItemIcon>
            <ListItemText primary="Hyper" />
          </ListItem>
        </Link>

        <Link to="/blog">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twiter" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="Linkelding" />
        </ListItem>
      </List>
    </div>
  );

  const segundo = () => {
    const id = document.getElementById("prueba");
    id.style.display = "none";
  };

  return (
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top bg-light"
      id="mainNav"
    >
      <div class="container menu-toogable">
      <i onClick={toggleDrawer(true)} class="fas fa-bars"></i>

        <a class="navbar-brand" href="/#inkgrid">
          <img
            width="100"
            height="50"
            src="https://www.ink-grid.com/wp-content/uploads/2019/09/cropped-logo_new.png"
            alt="ink-grid"
          />
        </a>
        <button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toogle="collapse"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto text-uppercase">
            {/* Inicion Menu de Opciones */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Consultoria
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/educacion" class="dropdown-item">
                  Educación
                </Link>
                <Link to="/mineria" class="dropdown-item">
                  Mineria
                </Link>
                <Link to="/comercio-servicio" class="dropdown-item">
                  Comercio y servicio
                </Link>
                <Link to="/turismo" class="dropdown-item">
                  Turísmo
                </Link>
                <Link to="/agua-energia" class="dropdown-item">
                  Agua y energia
                </Link>
                <Link to="transporte" class="dropdown-item">
                  Transporte
                </Link>
                <Link to="tecnologia" class="dropdown-item">
                  Tecnologia
                </Link>
                <Link to="/logistica-explotacion" class="dropdown-item">
                  Logistica y explotación
                </Link>
              </div>
            </li>



            {/* finalizo Primer Menu de Opciones */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                data-hover="dropdown"
                aria-expanded="true"
              >
                Capacitacion
              </a>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            {/* finalizo Segundo Menu de Opciones */}


            <li class="nav-item" role="presentation">
              <a class="nav-link js-scroll-trigger" href="#contact">
                Servicios	
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* DRAWER -- Menu de opciones */}

      <Drawer open={state} onClose={toggleDrawer(false)}>
        {sideList("left")}
      </Drawer>
    </nav>

  );
};

export default Navbar;
