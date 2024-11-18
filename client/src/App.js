import { theme } from "antd";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ChangeUsername, StockDetails } from "./pages";
import "./App.css";
import { Portfolio } from "./pages";
import { Content, Layout, Header, Menu } from "./components";

const routes = [
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/stocks/:stockId",
    element: <StockDetails />,
  },
  {
    path: "/change-user",
    element: <ChangeUsername />,
  },
];

function App() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClickMenu = ({ key }) => navigate(key);

  const selectedKey = useLocation().pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["/"];
    } else if (selectedKey === "/change-user") {
      return ["/change-user"];
    }
  };

  return (
    <div className="app-container">
      <Layout>
        <Header>
          <h1 className="logo">The5ers - ShaiS</h1>
        </Header>
        <Content>
          <Layout>
            <Layout.Sider
              style={{ background: colorBgContainer, height: 120, margin: 8 }}
              breakpoint="lg"
            >
              <Menu
                mode="inline"
                selectedKeys={highlight()}
                items={[
                  {
                    key: "/",
                    label: "Home",
                  },
                  {
                    key: "/change-user",
                    label: "Change User",
                  },
                ]}
                onClick={(key) => onClickMenu(key)}
              />
            </Layout.Sider>
            <Content>
              <Routes>
                {routes.map(({ path, element }) => (
                  <Route exact key={path} path={path} element={element} />
                ))}
              </Routes>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
