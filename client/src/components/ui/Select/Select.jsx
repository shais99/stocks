import { Select as AntdSelect } from 'antd';

const Select = ({ children, ...rest }) => <AntdSelect {...rest}>{children}</AntdSelect>;

Select.Option = AntdSelect.Option;

export { Select };