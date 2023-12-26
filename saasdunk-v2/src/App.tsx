import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Col, ConfigProvider, Layout, Row } from "antd";
import { useChangeTheme } from "./contextProviders/ChangeThemeProvider";
import { getAntComponent, getAntTheme, getColor } from "./config/themeHelper";
import Dashboard from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./config/global.config";
import AppLayout from "./layout/AppLayout";
import { Outlet, Route, Routes } from "react-router-dom";
import Student from "./components/Student/Student";
import Courses from "./components/Courses/Courses";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  const [count, setCount] = useState(0);

  const { theme, setTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getColor(theme)}>
      <ConfigProvider
        theme={{
          token: getAntTheme(theme),
          inherit: false,
          components: getAntComponent(theme),
        }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            element={
              <AppLayout>
                <Outlet />
              </AppLayout>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="students" element={<Student />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
