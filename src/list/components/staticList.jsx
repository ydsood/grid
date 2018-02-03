import React, { Component } from 'react';
import { List, Segment, Header } from 'semantic-ui-react';
import buildList from './listHOC';
import ListItem from './listItem';

type StaticListProps = {
  data: Array<string>,
  title: string
};

class StaticList extends Component<StaticListProps> {
  buildListItem() {
    const { data } = this.props;
    let cardNumber = 0;
    return data.map(item => {
      cardNumber += 1;
      return (
        <List.Item key={cardNumber}>
          <ListItem value={item} />
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
