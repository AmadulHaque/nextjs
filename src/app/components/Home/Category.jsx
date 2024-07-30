'use client';

import { useState, useEffect } from 'react';
import CategoryList from '@/services/category';

export default function Category({ onCategoryChange  }) {
  const [data, setData] = useState([]);
  const [active, setInactive] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await CategoryList();
        setData(data);
      } catch (error) {
        console.error('Error fetching category list', error);
      }
    };

    fetchData();
  }, []);
  
  const handleClick = (name) => () => {
      onCategoryChange(name);
      setInactive(name)
  };



  return (
    <>
      <ul className="nav" role="tablist">
        <li onClick={handleClick("")} className="nav-item" role="presentation">
          <a className={`nav-link ${active=="" ? 'active' : ''}`} >ALL </a>
        </li>
        {data?.map((item) => (
          <li onClick={handleClick(item.id)} className="nav-item" role="presentation" key={item.id}>
            <a className={`nav-link ${active==item.id ? 'active' : ''}`} >{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
