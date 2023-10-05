import React, { useEffect, useState } from "react";
import ApexCharts from 'apexcharts';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { Filter } from "./Filter";
import { SidebarProvider, useSidebar } from "./SidebarProvider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Main.scss";

import { Chart1 } from "./Chart1";
const LeftSidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  return (
    <nav className={isOpen ? 'left-sidebar left-sidebar--opened' : 'left-sidebar'}>
      <ul className="left-sidebar__list">
        <li className="left-sidebar__item">
          <a href={isOpen ? '#' : '#left-sidebar'} className={isOpen ? 'left-sidebar__link left-sidebar__link--open  left-sidebar__link--open--rotated' : 'left-sidebar__link left-sidebar__link--open'}onClick={toggleSidebar}><span>Закрити</span></a>
        </li>
        <li className="left-sidebar__item">
          <Link to="/filter" className="left-sidebar__link left-sidebar__link--filter"  onClick={toggleSidebar}><span>Фільтри</span></Link>
        </li>
        <li className="left-sidebar__item">
          <Link to="/chart" className="left-sidebar__link left-sidebar__link--chart">
            <span className="graph">Діаграми&nbsp;&nbsp;&#8595;</span>
            <ul className="dropdown-list">
              <li><Link to="/chart1" onClick={toggleSidebar}>Line</Link></li>
              <li><Link to="/chart2" onClick={toggleSidebar}>Pie chart 2</Link></li>
              <li><Link to="/chart3" onClick={toggleSidebar}>Графік 3</Link></li>
            </ul>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const Main = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <main className="main">
      {isLoggedIn ? (
        <div className="main__content">
          <LeftSidebar />
          <Routes>
            <Route path="/chart1" element={<Chart1 />} />
            <Route path="/filter" element={<Filter />} />
          </Routes> 
        </div>
      ) : (
        <h1 className="main__header">
          Вітаємо в проекті
          <br></br>
          “Планування”
        </h1>
      )}
    </main>
  );
};
