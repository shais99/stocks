import { Alert as AntdAlert } from 'antd';

export const Alert = ({ children, ...rest }) => <AntdAlert {...rest}>{children}</AntdAlert>