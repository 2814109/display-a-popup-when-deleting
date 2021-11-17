import { VFC } from "react";
import { Table } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
const List: VFC = () => {
  const testData = [...Array(10)].map((_, index) => {
    return { id: index + 1, item: `itemName${index + 1}` };
  });
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {testData.map((dataObject) => {
          return (
            <tr>
              <td>{dataObject.id}</td>
              <td>{dataObject.item}</td>
              <td>
                <DeleteButton />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default List;
