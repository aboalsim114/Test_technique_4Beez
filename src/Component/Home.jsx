
import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { BsHeartHalf } from "react-icons/bs";
import axios from "axios";
function Home({ data, setData }) {





  const [Année, setAnnée] = useState("");
  const [age, setAge] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  
  const handleFilter = (newAge, newAnnée, newSearchValue) => {
    setAge(newAge);
    setAnnée(newAnnée);
    setSearchValue(newSearchValue);
  };



  useEffect(() => {
    const filteredData = data.filter(
      item =>
        (Année === "" || item.attributes.startDate === Année) &&
        (age === "" || item.attributes.ageRatingGuide === age) &&
        (searchValue === "" ||
          (item.attributes.titles && item.attributes.titles.en && item.attributes.titles.en.toLowerCase().includes(searchValue.toLowerCase())))
    );
    
    setFilteredData(filteredData);
  }, [Année, age, searchValue, data]);

  
  // Définir les colonnes de la table
  const columns = React.useMemo(
    () => [
      {
        Header: "Titre",
        accessor: row =>
          (row.attributes && row.attributes.titles.en) || "Pas disponible"
      },
      {
        Header: "Titre en japonnais",
        accessor: row =>
          (row.attributes && row.attributes.titles.ja_jp) || "Pas disponible"
      },
      {
        Header: "Age recommandé",
        accessor: row =>
          (row.attributes && row.attributes.ageRatingGuide) || "Pas disponible"
      },
      {
        Header: "Date de sortie",
        accessor: row =>
          (row.attributes && row.attributes.startDate) || "Pas disponible"
      },
      {
        Header: "Rang",
        accessor: row =>
          (row.attributes && row.attributes.ratingRank) || "Pas disponible"
      },
      {
        Header: " ",
        accessor: "id",
        Cell: ({ cell: { value } }) => (
          <Link to={`/item/${value}`}>
            <button className="showBtn"> Voir les détails </button>
          </Link>
        )
      }
    ],
    []
  );






  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: filteredData }, useSortBy);

  return (
    <>
      <div className="container">
      <Filter  onFilterChange={handleFilter}  />
        <h1 id="Catalogue">Catalogue</h1>
        <table data={data} {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " " : " ") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={`/favoris`}>
          <button id="add_favo">
            Voir les favoris <BsHeartHalf className="icon" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
