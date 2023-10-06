import React, { useEffect, useState } from "react";
import ApexCharts from 'apexcharts';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Filter } from "../Filter/Filter";
import { SidebarProvider, useSidebar } from "../contexts/SidebarProvider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Main.scss";

import { Chart1 } from "../charts/Chart1/Chart1";
import { PieChart } from "../charts/PieChart/PieChart";
import { LineLabels } from "../charts/LineLabels/LineLabels";
import { BarChart } from "../charts/BarChart/BarChart";
import { BarMultiple } from "../charts/BarMultiple/BarMultiple";
import { BarStacked } from "../charts/BarCtacked/BarCtacked";

const LeftSidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  return (
    <nav className={isOpen ? 'left-sidebar left-sidebar--opened' : 'left-sidebar'}>
      <ul className="left-sidebar__list">
        <li className="left-sidebar__item">
          <a className={isOpen ? 'left-sidebar__link left-sidebar__link--open  left-sidebar__link--open--rotated' : 'left-sidebar__link left-sidebar__link--open'} onClick={toggleSidebar}><span>Закрити</span></a>
        </li>
        <li className="left-sidebar__item">
          <Link to="/filter" className="left-sidebar__link left-sidebar__link--filter" onClick={toggleSidebar}><span>Фільтри</span></Link>
        </li>
        <li className="left-sidebar__item">
          <Link className="left-sidebar__link left-sidebar__link--chart" onClick={toggleSidebar}>
            <span className="graph">Діаграми&nbsp;&nbsp;&#8595;</span>
            <ul className="dropdown-list">
              <li><Link to="/chart1" onClick={toggleSidebar}>Продажі</Link></li>
              <li><Link to="/pieChart" onClick={toggleSidebar}>Pie chart</Link></li>
              <li><Link to="/lineLabels" onClick={toggleSidebar}>Line Labels</Link></li>
              <li><Link to="/barChart" onClick={toggleSidebar}>Bar Chart</Link></li>
              <li><Link to="/barMultiple" onClick={toggleSidebar}>Bar Multi</Link></li>
              <li><Link to="/barStacked" onClick={toggleSidebar}>Bar Stacked</Link></li>
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
            <Route path="/pieChart" element={<PieChart />} />
            <Route path="/lineLabels" element={<LineLabels />} />
            <Route path="/barChart" element={<BarChart />} />
            <Route path="/barMultiple" element={<BarMultiple />} />
            <Route path="/barStacked" element={<BarStacked />} />
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
