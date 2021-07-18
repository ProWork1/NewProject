import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import '../css/navbar.css'

const menus = [
    {
      title: "Главная",
      id: "/",
    },
    {
      title: "О нас",
      id: "/aboutus",
    },
    {
      title: "Услуги",
      id: "/service",
    },
    {
      title: "Университеты",
      id: "/university",
    },
    {
      title: "Студенты",
      id: "/students",
    },
    {
      title: "Новости",
      id: "/news",
    },
    {
      title: "Контакты",
      id: "/contact",
    },
  ];
const NavbarComponent = () => {

    const [count,setcount] = useState(false);
    const buttonClick = () => {
        setcount(!count);
    };
    let location = useLocation();

    return <div>
        <div className="container ">
        <div className="row w-100 px-lg-5">
          <div className="col-lg col-md col-sm d-flex align-items-center">
            <div className="navbar_logo d-flex align-items-center order-2 order-lg-1 ">
              <img src="./images/logo.png" alt="" />
            </div>
            <div className="navbar_messanger d-flex order-1 order-lg-2">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
            </div>
            <ul className="nav mt-2 mx-4 order-3">
              {menus.map(({ title, id }) => (
                <li
                  className={
                    location.pathname === id
                      ? "active d-block text-center nav-item"
                      : null
                  }
                  key={title}
                >
                  <Link to={id} className="nav-link">
                    {title}
                  </Link>
                  <div className="navbar_line">
                    <img src="./images/line.png" alt="" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="ml-auto d-flex order-4">
              <div className="navbar_language d-none d-lg-flex mt-2">
                <p>РУС</p>
                <p>UZ</p>
              </div>
              <div className="navbar_message d-none d-lg-flex ml-auto">
                <div className="cricle">
                  <i className="fas fa-comment-dots"></i>
                </div>
                <p>Оставить заявку</p>
              </div>
            </div>
            <div className={count ? "navbar_menu d-lg-none order-3 mx-5" : "navbar_x d-lg-none order-3 mx-5"} onClick = {buttonClick}>
              <img src="./images/menu.png" alt="" />
            </div>
            <div className={count ? "navbar_x d-lg-none order-3 mx-5" : "navbar_menu d-lg-none order-3 mx-5"} onClick = {buttonClick}>
              <img src="./images/x.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={count ? "navbar_menus d-block d-lg-none" : "d-none"} onClick = {buttonClick}>
        <div className="navbar_language d-flex mt-2 pt-3">
          <p>РУС</p>
          <p>UZ</p>
        </div>
        <ul className="nav d-block text-center mt-2 mx-4 order-3">
          {menus.map(({ title, id }) => (
            <li
              className={
                location.pathname === id ? "d-block text-center nav-item" : null
              }
              key={title}
            >
              <Link to={id} className="nav-link mb-2">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar_message d-flex">
          <div className="cricle">
            <i className="fas fa-comment-dots"></i>
          </div>
          <p>Оставить заявку</p>
        </div>
        <div className="d-flex time mt-5 mx-4">
          <i className="fas fa-clock"></i>
          <p>Пн-Пт 9:00 - 18:00</p>
        </div>
        <div className="d-flex location mx-4">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            г. Город <span>ул. Улица, 24 (Офис 24)</span>
          </p>
        </div>
      </div>
    </div>
};

export default NavbarComponent
