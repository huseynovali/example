import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function Supliers() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize:4,
      pageSizeOptions: ['1', '2', '3', '4', '6'],
      showSizeChanger: true
    },
  });
  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams()
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch("https://reqres.in/api/products?per_page=" + search.get("per_page") + "&page=" + search.get("page"))
      .then((res) => res.json())
      .then((results) => {
        setData(results.data);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: results.total,
            current: results.page
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination) => {
    console.log(pagination);
    navigate("?per_page=" + pagination.pageSize + "&page=" + pagination.current)
    setTableParams({
      pagination
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <div>
      

      <Table
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  )
}

export default Supliers


