import React from "react";
import Table, { Thead, Tbody } from "./index";

export default {
  title: "UI/Table",
  component: Table,
};

export const base = () => (
  <Table>
    <Thead>
      <tr>
        <th>Head 1</th>
        <th>Head 2</th>
      </tr>
    </Thead>
    <Tbody>
      <tr>
        <td>Example 1</td>
        <td>Example 2</td>
      </tr>
      <tr>
        <td>Example 3</td>
        <td>Example 4</td>
      </tr>
    </Tbody>
  </Table>
);
