import { useEffect, useState } from 'react';
import { Section, Heading, Container } from 'react-bulma-components';

import 'react-bulma-components/dist/react-bulma-components.min.css';

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
      <Heading>
        Hi there!
      </Heading>

      <Container>
        {
          isFetching ? <h1>Loading</h1> :
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