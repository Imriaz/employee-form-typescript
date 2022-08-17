import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Employee } from "../model/model";

interface EmployeeListProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const useStyles = makeStyles({
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  table__td__th: {
    textAlign: "center",
    border: "1px solid gray",
    padding: "8px",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #27AE60",
    },
  },
  button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginLeft: "780px",
  },
});

const EmployeeList = ({ employees, setEmployees }: EmployeeListProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <h1>Employee</h1>
        <div>
          <Link to={`/Add`}>
            <button className={classes.button}>Add Employee</button>
          </Link>
        </div>
        <div className="row">
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.table__td__th}>Sl No</th>
                <th className={classes.table__td__th}>Employee ID</th>
                <th className={classes.table__td__th}>First Name</th>
                <th className={classes.table__td__th}>Last Name</th>
                <th className={classes.table__td__th}>Company</th>
                <th className={classes.table__td__th}>Phone No</th>
                <th className={classes.table__td__th}>Email</th>
                <th className={classes.table__td__th}>Address</th>
                <th className={classes.table__td__th}>Skill</th>
                <th className={classes.table__td__th}>Father's Name</th>
                <th className={classes.table__td__th}>Mother's Name</th>
              </tr>
            </thead>

            {employees?.map((employee, index) => (
              <tbody>
                <tr>
                  <td className={classes.table__td__th}>{index + 1}</td>
                  <td className={classes.table__td__th}>
                    {employee?.employeeID}
                  </td>
                  <td className={classes.table__td__th}>
                    {employee?.firstName}
                  </td>
                  <td className={classes.table__td__th}>
                    {employee?.lastName}
                  </td>
                  <td className={classes.table__td__th}>{employee?.company}</td>
                  <td className={classes.table__td__th}>{employee?.phoneNo}</td>
                  <td className={classes.table__td__th}>{employee?.email}</td>
                  <td className={classes.table__td__th}>
                    {employee?.address1}
                  </td>
                  <td className={classes.table__td__th}>{employee?.skill1}</td>
                  <td className={classes.table__td__th}>
                    {employee?.fathersName}
                  </td>
                  <td className={classes.table__td__th}>
                    {employee?.mothersName}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
