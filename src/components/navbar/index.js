/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';

import logo from "../../../src/logo.png";
import logoB from "../../../src/logo-dark.png";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

import Home from '@material-ui/icons/House';
import Turismo from '@material-ui/icons/Flight';
import AyE from '@material-ui/icons/FormatColorReset';
import Mineria from '@material-ui/icons/EmojiFoodBeverage';
import CyS from '@material-ui/icons/EmojiSymbols';
import Educacion from '@material-ui/icons/CastForEducation';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import Tecnologia from '@material-ui/icons/Laptop';
import LyE from '@material-ui/icons/LocalShipping';
import Servicio from '@material-ui/icons/RoomService';
import "./style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from "@material-ui/icons/Facebook";
import User from '@material-ui/icons/PermIdentity';

const Navbar = () => {
	

	const menuR = () => {
		let menu = document.getElementById('Idmenu');
		let header = document.getElementById('header-m');
		//
		menu.classList.toggle("mostrar-menu");
		header.classList.toggle("fijar-header");
		
	};
	
	const Cmenu = () => {
		let menu = document.getElementById('Idmenu');
		let header = document.getElementById('header-m');
		//
		menu.classList.remove("mostrar-menu");
		header.classList.remove("fijar-header");
	};

	return (
		<header className="header-home" id="header-m">
			<div class="container">
				<nav>
					<div class="menu-icons" onClick={menuR} id="hamburguesa">
						<MenuIcon className="hamburguesa" />
						
					</div>
					<Link to="/" className="logo" onClick={Cmenu}> <img src={logo} id="logo-dark"/> </Link>




					<ul class="nav-list" id="Idmenu">
						<li>
							<Link to="/"><Home />Nosotros <ArrowDropDownSharpIcon /></Link>
							<ul class="sub-menu">
								<div className="row">
									<div className="col-6">
										<li onClick={Cmenu}> <Link to="/empresa">Conócenos</Link> </li>
										<li onClick={Cmenu}> <Link to="/educacion">Reserva</Link> </li>
										<li onClick={Cmenu}> <Link to="/educacion">Comentarios</Link> </li>

									</div>
									

								</div>
							</ul>
						</li>
						<li>
							<Link to="/"><Servicio />Portafolio <ArrowDropDownSharpIcon /></Link>
							{/* <!-- 11111 --> */}
							<ul class="sub-menu">
								<div className="row">
									<div className="col-4 col12">
										<li onClick={Cmenu}> <Link to="/educacion"><Educacion />Educación</Link> </li>
										<li onClick={Cmenu}> <Link to="/mineria"><Mineria />Minería</Link> </li>
										<li onClick={Cmenu}> <Link to="/comercio"><CyS />Comercio y Servicios</Link> </li>

									</div>
									<div className="col-4 col12">
										<li onClick={Cmenu}> <Link to="/turismo"><Turismo />Turismo</Link> </li>
										<li onClick={Cmenu}> <Link to="/agua-energia"><AyE />Agua y energía</Link> </li>
										<li onClick={Cmenu}> <Link to="/transporte"><DirectionsBusIcon />Transporte</Link> </li>

									</div>
									<div className="col-4 col12">
										<li onClick={Cmenu}> <Link to="/tecnologia"><Tecnologia />Tecnología</Link> </li>
										<li onClick={Cmenu}> <Link to="/logistica"><LyE />Logística y Exportación</Link> </li>
								
									</div>

								</div>
							</ul>
							{/*  */}
							{/*  */}
						</li>

						<li>
							<Link to="/educacion">In Company <ArrowDropDownSharpIcon /></Link>
							<ul class="sub-menu">
								<div className="row">
									<div className="col-4 col-lg-12">
										<li onClick={Cmenu}> <Link to="/educacion">opcion 1</Link> </li>
										<li onClick={Cmenu}> <Link to="/educacion">opcion 2</Link> </li>
									</div>
								</div>

							</ul>
						</li>
						<li  onClick={Cmenu}>
						<Link to="/servicios">BPO <ArrowDropDownSharpIcon /></Link>
						</li>
						<li  onClick={Cmenu}>
							<a href="#">Blog</a>
						</li>

						{/*  */}
						<li  className="icon-usuario">
						<Link to="/servicios"><User /></Link>
						</li>
						{/*  */}
					</ul>

					<div className="contactanos py-4 px-2 d-none d-md-block">
					LLÁMANOS : <span>+51 962-711-999</span>
					</div>

					<div className="icon-usuario-header">
					<Link to="/login" className="user"> <User /> Iniciar Sesión</Link>
					</div>
				</nav>
			</div>

			<div id="redes-contacto" className="redes-contacto d-none">
				<a href="https://www.facebook.com/InkGridx/"  target="_blank"><FacebookIcon /></a> 
				<a href="https://pe.linkedin.com/company/ink-grid"  target="_blank"><LinkedInIcon /></a>
				<a href="https://www.whatsapp.com"  target="_blank"><WhatsAppIcon /></a>
				
			</div>
		</header> 

	);
};

export default Navbar;
