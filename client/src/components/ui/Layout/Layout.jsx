import { Layout as AntdLayout } from "antd";

const Layout = ({ children, ...rest }) => (
  <AntdLayout {...rest}>{children}</AntdLayout>
);

Layout.Sider = AntdLayout.Sider;

const Content = ({ children, ...rest }) => (
  <AntdLayout.Content {...rest}>{children}</AntdLayout.Content>
);

const Header = ({ children, ...rest }) => (
  <AntdLayout.Header {...rest}>{children}</AntdLayout.Header>
);

export { Layout, Content, Header };
