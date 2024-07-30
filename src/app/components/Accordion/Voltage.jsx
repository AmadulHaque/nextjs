"use client"
import { voltageTypes } from "@/services/api";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Voltage = ({ onVoltageChange }) => {
  const [activeVoltages, setActiveVoltages] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await voltageTypes();
        setData(data);
      } catch (error) {
        console.error('Error fetching voltage list', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (voltage) => () => {
    const newActiveVoltages = activeVoltages.includes(voltage)
      ? activeVoltages.filter(activeVoltage => activeVoltage !== voltage)
      : [...activeVoltages, voltage];

    setActiveVoltages(newActiveVoltages);
    onVoltageChange(newActiveVoltages);
  };

  return (
    <>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Voltage</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-column gap-3">
            {data?.map((voltage, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={voltage.id}
                  id={`checkbox${index + 5}`}
                  checked={activeVoltages.includes(voltage.id)}
                  onChange={handleClick(voltage.id)}
                />
                <label className="form-check-label" htmlFor={`checkbox${index + 5}`}>
                  {voltage.name}
                </label>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Voltage;
