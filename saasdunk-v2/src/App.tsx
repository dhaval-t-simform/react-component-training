import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Col, ConfigProvider, Layout, Row } from "antd";
import { useChangeTheme } from "./contextProviders/ChangeThemeProvider";
import { getAntComponent, getAntTheme, getColor } from "./config/themeHelper";
import Dashboard from "./components/Dashboard/Dashboard";
import { GlobalStyle } from "./config/global.config";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";

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
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/marketing" element={< />} /> */}
          </Routes>
        </AppLayout>
        {/* <Sider style={{ backgroundColor: AppThemeColors[theme].primary }}>
            Sider
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: AppThemeColors[theme].primary }}>
              Header
            </Header>
            <Content style={{ backgroundColor: AppThemeColors[theme].primary }}>
              Content
            </Content>
            <Footer style={{ backgroundColor: AppThemeColors[theme].primary }}>
              Footer
            </Footer>
          </Layout> */}
        {/* </Layout> */}
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
