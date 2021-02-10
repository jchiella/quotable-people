import { Card, Heading} from 'react-bulma-components';

export default function Quote({
  quote,
  quotedPerson,
  time,
  quotedBy,
}) {
  return (
    <Card style={{ margin: '1rem' }}> 
      <Card.Content>
        <Heading title>"{ quote }"</Heading>
        <Heading subtitle>&mdash;&nbsp;{ quotedPerson },&nbsp;{ time }</Heading>
        <p>
          Quoted by { quotedBy }
        </p>
      </Card.Content>
    </Card>
  );
}