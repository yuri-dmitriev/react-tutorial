import React, { Fragment } from 'react';
import './styles.css';

const styles = {color: 'red', textTransform: 'uppercase'};

const Columns = () => (
  <Fragment>
    <td style={styles}>Inline</td>
    <td className='title'>Simple class</td>
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