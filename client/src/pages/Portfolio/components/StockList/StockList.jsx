import React from "react";
import {Card, Row} from "../../../../components";
import {DeleteOutlined, InfoOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

export const StockList = ({stocks, onDeleteStock}) => {
    const navigate = useNavigate();

    return (
        <Row>
            {stocks.map(stock => (
                <Card
                    style={{height: '100%', width: 250, margin: 6}}
                    key={stock.symbol}
                    title={stock.name}
                    actions={[
                        <DeleteOutlined key="delete" style={{ color: 'red' }}
                                        onClick={() => onDeleteStock(stock._id)}/>,
                        <InfoOutlined key="info" className="icon pointer"
                                      onClick={() => navigate(`/stocks/${stock._id}`)}/>
                    ]}
                >
                    <h3>Symbol: {stock.symbol}</h3>
                </Card>
            ))}
        </Row>
    )
}