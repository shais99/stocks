import { Col as AntdCol } from "antd";

export const Col = ({ children, ...rest }) => <AntdCol {...rest}>{children}</AntdCol>;