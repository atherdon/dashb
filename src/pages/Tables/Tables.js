import React from "react";

import { Table } from "../../components";
import topAutors from "../../data/top-authors";
import { columns } from "./tableColumns";

const Tables = () => {
  const dataSource = topAutors.map((item, index) => {
    return {
      key: index,
      ...item,
    };
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Tables;
