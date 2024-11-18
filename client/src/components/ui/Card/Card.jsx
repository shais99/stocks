import { Card as AntdCard } from "antd";

export const Card = ({ children, ...rest }) => (
  <AntdCard {...rest}>{children}</AntdCard>
);
