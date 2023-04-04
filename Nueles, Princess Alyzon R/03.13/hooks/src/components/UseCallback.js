import React, { useState, useMemo, useEffect, useCallback } from 'react'

const UseCallback = () => { //2 state functions
    const [number, setNumber] = useState(0); //for input
    const [darkTheme, setDarkTheme] = useState(false); //for toggle theme

    //will only run print table not the toggle button when clicked unlike before;
    //can now pass value as parameters in function eg 2 and store in value variable;
    //let newNum = number + value; instead of number, pass newNum
    //setRows(calculateTable(2)); useCallback((value)
    //we get table of original number + 2
    const calculateTable = useCallback((value) => {
        let newNum = number + value;
        return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5];
    }, [number])

    const cssStyle = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
    };

    //transfer to callback function
    //return first 5 rows of that number's table; [eg callng api]
    // const calculateTable = () => {
    //     return [number * 1, number * 2, number * 3, number * 4, number * 5];
    // }

    return (
        <div style={cssStyle}>
            <input onChange={(e) => setNumber(e.target.valueAsNumber)} type="number" value={number}>
            </input>

            {/* create component PrintTable for printing the table and pass function as props */}
            <PrintTable calculateTable={calculateTable} />
            <button onClick={() => setDarkTheme(!darkTheme)}> Toggle DarkTheme </button>
        </div>


    )
};

//1. in this component, create state rows
const PrintTable = ({ calculateTable }) => {
    const [rows, setRows] = useState([]); //3. so that vvalues of array set in rows variable

    useEffect(() => {
        console.log("Print Table Runs!");
        //setRows(calculateTable()); //2. pass calculate table function inside rows function
        setRows(calculateTable(2));
    }, [calculateTable]);

    //4. print this rows array using map method
    return rows.map((row, index) => {
        return <p key={index}> {row} </p>
    });
}

export default UseCallback
