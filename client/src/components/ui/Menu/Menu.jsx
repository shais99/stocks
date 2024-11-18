import { Menu as AntdMenu } from 'antd';

const Menu = ({ ...rest }) => <AntdMenu {...rest} />

Menu.Item = AntdMenu.Item;

export { Menu }