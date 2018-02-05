import React, { Component } from 'react';
import { Table, Segment, Header } from 'semantic-ui-react';
import buildGrid from './gridHOC';
import TableRow from './tableRow';

type StaticGridProps = {
  data: Array<string>,
  title: string,
  columnModel: Function,
  buildTableHeaders: Function
};

class StaticGrid extends Component<StaticGridProps> {
  buildTableBody() {
    const { data, columnModel } = this.props;
    return data.map((item, index) => (
      <TableRow key={`${index}`} data={item} columnModel={columnModel} />
    ));
  }

  render() {
    const renderComponent = (
      <Segment>
        <Header as="h4">{`${this.props.title}`}</Header>
        <Segment basic>
          <Table>
            {this.props.buildTableHeaders()}
            <Table.Body>{this.buildTableBody()}</Table.Body>
          </Table>
        </Segment>
      </Segment>
    );
    return renderComponent;
  }
}

const foo = buildGrid(StaticGrid);
export default foo;
