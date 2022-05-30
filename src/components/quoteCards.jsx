import React from 'react'
import { Card, Col } from 'antd'


const { Meta } = Card;

export default function QuoteCard({ quote }) {

    return(
        <Col style={{ width: '250px', margin: '2em' }}> 
        <Card

            loading={!quote}
            hoverable
            style={{ width: 240 }}
            cover={quote && <img src={quote.image} style={{ width: '100px', height: '100px'}} />}
            >
            <Meta title={quote?.quote} description={quote?.movie} />
        </Card>
        </Col>
);
}

