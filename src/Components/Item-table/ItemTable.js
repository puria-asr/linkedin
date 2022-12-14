import React from "react";
import TabelTr from "../tabel-tr/TabelTr";

const ItemTable = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Account</th>
            <th>Category</th>
            <th>From date</th>
            <th>To date</th>
            <th>From fax</th>
            <th>To fax</th>
            <th>Fax</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => {
              return (
                <TabelTr
                  name={element.name}
                  Account={element.account}
                  Category={element.category}
                  fromdate={element.fromDate}
                  todate={element.toDate}
                  fromFax={element.fromFax}
                  tofax={element.ToFax}
                  Fax={element.Fax}
                  key={element.id}
                />
              );
            })
          ) : (
            <h1 className="notfounditem">Item not found</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
