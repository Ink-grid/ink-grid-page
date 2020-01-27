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
import "./menu.css";

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
    ){
      return;
    }else if(event.type ==="click"){
      console.log(event.type);
      
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
             style={{fontSize:'3em'}}
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
      {/* Barra lateral */}
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
        <Link to="">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
        </Link>
        <Link>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twiter" />
          </ListItem>
        </Link>
        <Link>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Linkelding" />
          </ListItem>
        </Link>
      </List>
    
    </div>
  );

  const segundo = () => {
    const id = document.getElementById("prueba");
    id.style.display = "none";
  };

  return (
    <nav>
    <ul class="container ul-reset">

      <li className="menu-toogable">
      <i onClick={toggleDrawer(true)} class="fas fa-bars"></i>
      </li>

      <li>
      <a class="navbar-brand" href="/#inkgrid">
          <img
            width="100"
            height="50"
            src="https://www.ink-grid.com/wp-content/uploads/2019/09/cropped-logo_new.png"
            alt="ink-grid"
          />
        </a>
      </li>

      <li><a href='#'>Home</a></li>
      <li class='droppable'>
        <a href='#'>Industrias  </a>
        <div class='mega-menu'>
          <div class="container cf">
            <ul class="ul-reset">
              <h3>Heading 1</h3>
              <li><a href='#'>Educación</a></li>
              <li><a href='#'>Minería</a></li>
              <li><a href='#'>Comercio y Servicio</a></li>
              <li><a href='#'>Turismo</a></li>
              <li><a href='#'>Agua y Energía</a></li>
              <li><a href='#'>Transporte</a></li>
             
            </ul>
            <ul class="ul-reset">
              <h3>Opción 2</h3>
              <li><a href='#'>Category One Sublink</a></li>
              <li><a href='#'>Category One Sublink</a></li>
             
            </ul>
            <ul class="ul-reset">
              <h3>Opcion 3 3</h3>
              <li><a href='#'>Category One Sublink</a></li>
              <li><a href='#'>Category One Sublink</a></li>
              
            </ul>
            <ul class="ul-reset">
              <h3>Heading 4</h3>
              <li><img src="http://placehold.it/205x172" /></li>
            </ul>
          </div>
        </div>
      </li>
      <li class='droppable'>
        <a href='#'>Category Two</a>
        <div class='mega-menu'>
          <div class="container cf">
            <ul class="ul-reset">
              <h3>Heading 1</h3>
              <li><a href='#'>Category Two Sublink</a></li>
              <li><a href='#'>Category Two Sublink</a></li>
              
            </ul>
            <ul class="ul-reset">
              <h3>Heading 2</h3>
              <li><a href='#'>Category Two Sublink</a></li>
              
            </ul>
            <ul class="ul-reset">
              <h3>Heading 3</h3>
              <li><a href='#'>Category Two Sublink</a></li>
              <li><a href='#'>Category Two Sublink</a></li>
             
            </ul>
            <ul class="ul-reset">
              <h3>Heading 4</h3>
              <li><a href='#'>Category Two Sublink</a></li>
              <li><a href='#'>Category Two Sublink</a></li>
       
            </ul>
          </div>
        </div>
      </li>
      <li><a href='#'>Category Three</a></li>
    </ul>

    {/* DRAWER -- Menu de opciones */}

    <Drawer open={state} onClose={toggleDrawer(false)}>
        {sideList("left")}
      </Drawer>
  </nav>
  );
};

export default Navbar;
