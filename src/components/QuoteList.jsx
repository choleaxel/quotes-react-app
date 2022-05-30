
import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import QuoteCard from './QuoteCards';

function QuoteList() {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    // fetch our API
    fetch('https://fir-message-app-na.web.app/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(console.error)
  }, [])
  return (
    <section style={{ marginTop: '60px', marginRight: '20px'}}>
      <Row> <h2>Quotes from Popular Movies</h2>
        {!quotes
          ? <h2>Loading...</h2>
          : quotes.map((quote) => (<QuoteCard quote={quote} key={quote.id} />))}
      </Row>
    </section>
  )
}

export default QuoteList;


