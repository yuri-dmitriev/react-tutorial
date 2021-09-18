import React, { Fragment } from 'react';

const Columns = () => (
  <Fragment>
    <td>Hello</td>
    <td>world</td>
  </Fragment>
);

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

export default Table;