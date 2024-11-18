import {Select} from "./ui";
import {observer} from "mobx-react-lite";
import userStore from "../store/userStore";

export const SearchStock = observer(({ options, onSearch, onChange, value }) => {

    const { user } = userStore

    return (
        <Select
            onSearch={onSearch}
            value={value || undefined}
            showSearch
            placeholder="Search Stocks"
            style={{ minWidth: 200, width: '50%', margin: 20 }}
            filterOption={false}
            onChange={user ? onChange : undefined}
            disabled={!user}
        >
            {options.map(option =>
                <Select.Option
                    key={option.symbol}
                    value={option.symbol}
                    style={{ cursor: user ? 'pointer' : 'not-allowed'}}
                >
                    Symbol: {option.symbol} | Name: {option.name}
                </Select.Option>
            )}
        </Select>
    )
})