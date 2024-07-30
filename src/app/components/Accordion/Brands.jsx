"use client"
import { useEffect, useState } from "react";
import BrandList from "@/services/brand";
import Accordion from "react-bootstrap/Accordion";

const Brands = ({ onBrandChange }) => {
  const [data, setData] = useState([]);
  const [activeIds, setActiveIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BrandList();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching brand list', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => () => {
    const newActiveIds = activeIds.includes(id)
      ? activeIds.filter(activeId => activeId !== id)
      : [...activeIds, id];

    setActiveIds(newActiveIds);
    onBrandChange(newActiveIds);
  };

  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Brands</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-column gap-3">
            {data?.map((item) => (
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.id}
                  id={`checkbox${item.id}`}
                  checked={activeIds.includes(item.id)}
                  onChange={handleClick(item.id)}
                />
                <label className="form-check-label" htmlFor={`checkbox${item.id}`}>
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Brands;
