import { Row as AntdRow } from "antd";

export const Row = ({ children, ...rest }) => (
  <AntdRow {...rest}>{children}</AntdRow>
);
