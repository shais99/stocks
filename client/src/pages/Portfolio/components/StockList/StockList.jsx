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
                    actions={[
                        <DeleteOutlined key="delete" className="icon pointer"
                                        onClick={() => onDeleteStock(stock._id)}/>,
                        <InfoOutlined key="info" className="icon pointer"
                                      onClick={() => navigate(`/stocks/${stock._id}`)}/>
                    ]}
                >
                    <h3>
                        {stock.symbol}
                    </h3>
                    <span>{stock.name}</span>
                </Card>
            ))}
        </Row>
    )
}