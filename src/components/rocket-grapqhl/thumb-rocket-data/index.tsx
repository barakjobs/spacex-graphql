import React from 'react';
import DataTable from "react-data-table-component";
// import * as S from './styles';
const blank = '_blank';

const columns = [
  {
    name: "Mission Name",
    selector: "mission_name"
  },
  {
    name: "Launch Date",
    cell: row => <div>{new Date(row.launch_date_local).toDateString()}</div>
  },
  {
    name: "Launch Site",
    selector: "launch_site.site_name_long"
  },
  {
    name: "wikipedia link",
    cell: row => <a href={row.links.wikipedia} target={blank}>{row.links.wikipedia}</a>
  },
  {
    name: "Rocket",
    selector: "rocket.rocket_name"
  },
];
const ThumbRocketData = ({ filteredArray }) => 
  [undefined].includes(filteredArray) || filteredArray.length <= 0
    ? <p>Loading...</p>
    : 
    <DataTable
          columns={columns}
          data={filteredArray}
          pagination
          selectableRows
          fixedHeader
          selectableRowsNoSelectAll
        />;

export { ThumbRocketData as default };
