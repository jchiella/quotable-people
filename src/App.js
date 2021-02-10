import { useEffect, useState } from 'react';
import { Section, Heading, Container, Loader } from 'react-bulma-components';

import Quote from './Quote';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://jameson-essentials.herokuapp.com/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setIsFetching(false);
      });
  }, []);

  return (
    <Section>
      <Heading style={{ textAlign: 'center' }}>
        The Quotable People of AAAAAAAAA
      </Heading>

      <Container>
        {
          isFetching ? <Loader style={{ margin: 'auto', width: '5rem', height: '5rem' }}/> :
          quotes.filter((q) => !!q).map((q, i) =>
            <Quote
              key={i}
              quote={q.quote}
              quotedPerson={q.quotedPerson}
              time={q.time}
              quotedBy={q.quotedBy}
            />
          )
        }
      </Container>
    </Section>
  );
}