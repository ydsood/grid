import React, { Component } from 'react';
import { Table, Segment, Header } from 'semantic-ui-react';
import buildGrid from './gridHOC';
import TableRow from './tableRow';

type StaticGridProps = {
  data: Array<string>,
  title: string,
  getData: Function,
  columnModel: Function
};

class StaticGrid extends Component<StaticGridProps> {
  buildTableBody() {
    const { data, columnModel } = this.props;
    return data.map((item, index) => (
      <TableRow key={`${index}`} data={item} columnModel={columnModel} />
    ));
  }

  buildTableHeaders() {
    return (
      <Table.Header>
        <Table.Row>
          {this.props.columnModel
            .get()
            .map(item => (
              <Table.HeaderCell key={item.dataIndex}>
                {item.name}
              </Table.HeaderCell>
            ))}
        </Table.Row>
      </Table.Header>
    );
  }

  render() {
    const renderComponent = (
      <Segment>
        <Header as="h4">{`${this.props.title}`}</Header>
        <Segment basic>
          <Table>
            {this.buildTableHeaders()}
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
