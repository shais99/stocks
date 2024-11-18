import { Badge as AntdBadge } from "antd";

export const Badge = ({ children, ...rest }) => (
  <AntdBadge {...rest}>{children}</AntdBadge>
);
