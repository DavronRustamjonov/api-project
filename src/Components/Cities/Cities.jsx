import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin, Table } from 'antd';

function Cities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BaseUrl = 'https://autoapi.dezinfeksiyatashkent.uz/api/';
  const ImgUrl = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/';

  const getCities = () => {
    setLoading(true); 
    axios.get(`${BaseUrl}cities`)
      .then(response => {
        console.log(response.data.data);
        setCities(response.data.data);
        setError(null);
      })
      .catch(error => {
        setError(' Xatolik ');
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  useEffect(() => {
    getCities();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Text',
      dataIndex: 'address',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Data Picture',
      dataIndex: 'dataPic',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Img',
      dataIndex: 'pic',
      width: 190,
      render: (src) => (
        <img
          src={src}
          alt="City"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      ),
    },
  ];
  const tableData = cities.map((item, index) => ({
    key: index,
    name: item.name,
    pic: `${ImgUrl}${item.image_src}`,
    dataPic: item.created_at,
    address: item.text,
    slug: item.slug,
  }));
  return (
    <div className='container cities-container'>
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', 
        }}>
          <Spin/>
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className='wrapper '>
          <Table
          style={{marginTop:'60px'}}
            columns={columns}
            dataSource={tableData}
            pagination={{
              pageSize: 50,
            }}
            scroll={{
              y: 340,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Cities;
