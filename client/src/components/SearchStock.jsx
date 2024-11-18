import { Select } from "./ui";
import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";

export const SearchStock = observer(
  ({ options, onSearch, onChange, value }) => {
    const { user } = userStore;

    return (
      <div style={{ width: "100%", padding: 20 }}>
        <Select
          onSearch={onSearch}
          value={value || undefined}
          showSearch
          placeholder="Search Stocks"
          style={{ width: "100%" }}
          filterOption={false}
          onChange={user ? onChange : undefined}
          disabled={!user}
        >
          {options.map((option) => (
            <Select.Option
              key={option.symbol}
              value={option.symbol}
              style={{ cursor: user ? "pointer" : "not-allowed" }}
            >
              Symbol: {option.symbol} | Name: {option.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  },
);
