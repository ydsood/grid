import React from 'react';
import { Card } from 'semantic-ui-react';
import { markdown } from 'markdown';

export default function listCard(props: Object) {
  const value = props.input ? props.input.value : props.value;
  return (
    <Card>
      <Card.Content>
        <Card.Header>Hobby</Card.Header>
        <Card.Description>
          <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(value) }} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
