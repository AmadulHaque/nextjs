"use client";

const PrintBtn = () => {
  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={() => window.print()}>
        Print invoice
      </button>
    </>
  );
};

export default PrintBtn;
