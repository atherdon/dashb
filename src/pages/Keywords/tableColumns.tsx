export const tableColumns = (columnName: any) => {
  const columns = [
    {
      title: `${columnName}`,
      dataIndex: `${columnName}`,
      key: `${columnName}`
    },
    {
      title: 'Clicks',
      dataIndex: 'Clicks',
      key: 'Clicks'
    },
    {
      title: 'Impressions',
      dataIndex: 'Impressions',
      key: 'Impressions'
    },
    {
      title: 'CTR',
      dataIndex: 'CTR',
      key: 'CTR'
    },
    {
      title: 'Position',
      dataIndex: 'Position',
      key: 'Position'
    }
  ];
  return columns;
};
