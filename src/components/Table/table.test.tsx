import React from "react";
import { render, screen } from "@testing-library/react";
import Table, { Thead, Tbody } from "./index";

it("should render table", () => {
  render(
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
    </Table>,
  );

  screen.getByRole("columnheader", { name: "Head 1" });
  screen.getByRole("columnheader", { name: "Head 2" });

  const rows = screen.getAllByRole("row").slice(1);

  expect(rows[0].querySelectorAll('td')[0].innerHTML).toBe('Example 1')
  expect(rows[0].querySelectorAll('td')[1].innerHTML).toBe('Example 2')
  expect(rows[1].querySelectorAll('td')[0].innerHTML).toBe('Example 3')
  expect(rows[1].querySelectorAll('td')[1].innerHTML).toBe('Example 4')

  expect(rows.length).toBe(2);
});
