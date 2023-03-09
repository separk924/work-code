import React, { useState, useEffect, useMemo } from "react";
import Table from './Table'
import './Dropdown.css';
import starwars from "./APIs/starwars";
import force from "./components/force.png";
import FilterForm from "./Filter";

{/**
    Icon() creates an svg for the dropdown menu
*/}
const Icon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      );
};

{/**
    Dropdown() waits for the user to click on an option, and renders a table for 
    that option. While it is waiting for the option, the website displays an image
    and quote
    @param {object} placeHolder The place holder for the Dropdown menu
    @param {object} options The options in the menu
*/}
const Dropdown = ({ placeHolder, options}) => {

    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(null);
    const [dataPeople, setDataPeople] = useState([]);
    const [dataPlanet, setDataPlanet] = useState([]);
    const [dataStarship, setDataStarship] = useState([]);
    const [dataFilm, setDataFilm] = useState([]);
    const [dataSpecies, setDataSpecies] = useState([]);
    const [dataVehicle, setDataVehicle] = useState([]);

    /**
     * Waits for user to click
     */
    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);
        return() => {
            window.removeEventListener("click", handler);
        };
    });

    /**
     * When the menu is clicked, the menu is closed
     */
    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }

    /**
     * Displays the option that was selected
     * @returns {object} the selected option, or placeholder if not selected
     */
    const getDisplay = () => {
        if(selectedValue){
            return selectedValue.type;
        }
        return placeHolder;
    };


    /**
     * Set selected value and stores it in selectedValue
     * @param {object} option object in Dropdown menu
     */
    const onItemClick = (option) => {
        setSelectedValue(option);
    }

    /**
     * Checks whether an option has been selected
     * @param {object} option object in Dropdown menu
     * @returns true if the option has been selected
     */
    const isSelected = (option) => {
        if(!selectedValue){
            return false;
        }

        return selectedValue.value === option.value;
    }

    /**
     * Creates the table
     * @param {object} data The JSON data that will be passed into the table
     * @returns The column structure of the table
     */
    const createTable = (data) => {
        var columns = [];
        var first = data[0];
        var Delete = {
            Header: " ",
            accessor: "delete",
            accessor: (str) => "delete",
            Filter: FilterForm,

            Cell: (theRow) => (
                <span
                    style={{
                    cursor: "pointer",
                    color: "#8B0000"
                    }}
                    onClick={() => {
                    const dataCopy = [...theRow.data];
                    dataCopy.splice(theRow.row.index, 1);
                    if(selectedValue?.type == "People"){
                        setDataPeople(dataCopy);
                    }else if(selectedValue?.type == "Planets"){
                        setDataPlanet(dataCopy);
                    }else if(selectedValue?.type == "Starships"){
                        setDataStarship(dataCopy);
                    }else if(selectedValue?.type == "Films"){
                        setDataFilm(dataCopy);
                    }else if(selectedValue?.type == "Species"){
                        setDataSpecies(dataCopy);
                    }else if(selectedValue?.type == "Vehicles"){
                        setDataVehicle(dataCopy);
                    }
                    }}
                >
                    Delete
                </span>
                )
        }
        columns.push(Delete);
        for (var item in first){
        var col = {
            Header: item,
            accessor: item,
            Filter: FilterForm,
        }
        columns.push(col);
        }
        return columns;
    }

    /**
     * Sets the data and columns according to the option that was selected in the 
     * Dropdown menu.
     */
    useEffect(() => {
        if(selectedValue?.type == "People"){
            if(dataPeople.length == 0){
                starwars.getPeople().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataPeople));
                setData(dataPeople);
            }
        }else if(selectedValue?.type == "Planets"){
            if(dataPlanet.length == 0){
                starwars.getPlanets().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataPlanet));
                setData(dataPlanet);
            }
        }else if(selectedValue?.type == "Starships"){
            if(dataStarship.length == 0){
                starwars.getStarships().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataStarship));
                setData(dataStarship);
            }
        }else if(selectedValue?.type == "Films"){
            if(dataFilm.length == 0){
                starwars.getFilms().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataFilm));
                setData(dataFilm);
            }
        }else if(selectedValue?.type == "Species"){
            if(dataSpecies.length == 0){
                starwars.getSpecies().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataSpecies));
                setData(dataSpecies);
            }
        }else if(selectedValue?.type == "Vehicles"){
            if(dataVehicle.length == 0){
                starwars.getVehicles().then((response) => {
                    setData(response);
                    if(data){
                        setColumns(createTable(data))
                    }
                });
            }else {
                setColumns(createTable(dataVehicle));
                setData(dataVehicle);
            }
        }
    }, [selectedValue?.type, data, dataPeople, dataPlanet, dataFilm, dataSpecies, dataVehicle, dataStarship]);
  
    return (
        <div className="dropdown-container">
            <h1 className="selectCategory">Select a Category: </h1>
            <div onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon />
                    </div>
                </div>
                {showMenu && (
                    <div className="dropdown-menu">
                        {options.map((option) => (
                            <div 
                            onClick = {() => onItemClick(option)}
                            key={option.type} 
                            className={`dropdown-item ${isSelected(option) && "selected"}`}>
                                {option.type}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <br></br>
                {selectedValue && columns ? (
                    <>
                    <Table
                        columns={columns}
                        data={data}>
                    </Table>
                    </>
                ) : 
                <>
                    <div className="quote">
                        <i>"Do. Or do not. There is no try."<br/>-Yoda</i>
                    </div>
                    <div className="force">
                    <img src={force} alt="force" />
                    </div>
                </>}
            </div>
        </div>
    );
  };

  export default Dropdown;