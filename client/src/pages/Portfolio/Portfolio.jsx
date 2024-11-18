import React, { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Alert, Flex, SearchStock, Spin } from "../../components";
import stockStore from "../../store/stockStore";
import { StockList } from "./components";
import { useDebounce } from "../../hooks";
import userStore from "../../store/userStore";
import { Link } from "react-router-dom";

export const Portfolio = observer(() => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!userStore.user) return;

    stockStore.getStocks(userStore.user);

    return () => {
      stockStore.clearStocks();
      stockStore.clearError();
    };
  }, []);

  const search = useCallback(async () => {
    if (!debouncedValue) {
      return;
    }

    await stockStore.searchStocks(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  const onSearch = (value) => {
    stockStore.clearSearchedStocks();

    setSearchValue(value);
  };

  const onAddStock = async (symbol) => {
    if (!userStore.user) return;

    const stock = stockStore.searchedStocks.find(
      (stock) => stock.symbol === symbol,
    );

    const stockToAdd = {
      symbol: stock.symbol,
      name: stock.name,
      username: userStore.user,
    };

    stockStore.clearSearchedStocks();

    setSearchValue("");

    await stockStore.addStock(stockToAdd);
  };

  const onDeleteStock = async (stockId) => {
    await stockStore.deleteStock(stockId);
  };

  if (stockStore.loadingStocks) {
    return (
      <Flex justify="center" style={{ margin: 24 }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (stockStore.error) {
    return (
      <Alert
        message={stockStore.error}
        type="error"
        style={{ margin: 8 }}
        showIcon
      />
    );
  }

  return (
    <Flex vertical={true} justify="space-between" align="center">
      {!userStore.user && (
        <Alert
          message={
            <>
              Please set your username to add stocks{" "}
              <Link to={"/change-user"}>here</Link>
            </>
          }
          type="warning"
          style={{ margin: 8, width: "100%" }}
          showIcon
        />
      )}
      <SearchStock
        options={stockStore.searchedStocks}
        onSearch={onSearch}
        onChange={onAddStock}
        value={searchValue}
      />
      <StockList stocks={stockStore.stocks} onDeleteStock={onDeleteStock} />
    </Flex>
  );
});
