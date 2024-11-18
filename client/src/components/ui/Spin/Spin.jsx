import { Spin as AntdSpin } from 'antd';

export const Spin = ({ children, ...rest }) => <AntdSpin {...rest}>{children}</AntdSpin>