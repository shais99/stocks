import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import stockStore from "../../store/stockStore";
import {Badge} from "../../components/ui/Badge/Badge";
import {Alert, Flex, Spin} from "../../components";
import userStore from "../../store/userStore";

export const StockDetails = observer(() => {
    const { stockId } = useParams();

    useEffect(() => {
        stockStore.getStockQuote(stockId, userStore.user)

        return () => {
            stockStore.clearStockQuote()
            stockStore.clearError()
        }
    }, [stockId])

    if (stockStore.error) {
        return <Alert message={stockStore.error} type="error" style={{margin: 8}} showIcon/>
    }

    if (!stockStore.stockQuote) {
        return <Flex justify="center" style={{ margin: 24 }}><Spin size="large" /></Flex>
    }

    const { name, symbol, price, changesPercentage, dayLow, dayHigh, exchange, pe } = stockStore.stockQuote

    return (
        <Flex gap={16} vertical={true} style={{ padding: 24 }}>
            <h1>
                <Flex gap={8} align="center">
                    {name}
                    <Badge count={`${changesPercentage}%`} color={changesPercentage > 0 ? 'green' : 'red'} />
                </Flex>
            </h1>
            <h3>{symbol}</h3>
            <p>Exchange: {exchange}</p>
            <p>Price: {price}</p>
            <p>Day Low: {dayLow}</p>
            <p>Day High: {dayHigh}</p>
            <p>PE: {pe}</p>
        </Flex>
    )
})