import React, { Component } from 'react';
import { List, Card, Segment, Header } from 'semantic-ui-react';
import { markdown } from 'markdown';
import buildList from './listHOC';

type StaticListProps = {
  data: Array<string>,
  title: string,
};

class StaticList extends Component<StaticListProps> {
  buildListItem() {
    const { data } = this.props;
    let cardNumber = 0;
    return data.map((item) => {
      cardNumber += 1;
      return (
        <List.Item key={cardNumber}>
          <Card>
            <Card.Content>
              <Card.Header>{`Card #${cardNumber}`}</Card.Header>
              <Card.Description>
                <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(item) }} />
              </Card.Description>
            </Card.Content>
          </Card>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <Segment>
        <Header as="h4">{this.props.title}</Header>
        <Segment basic>
          <List>{this.buildListItem()}</List>
        </Segment>
      </Segment>
    );
  }
}

const foo = buildList(StaticList);
export default foo;
