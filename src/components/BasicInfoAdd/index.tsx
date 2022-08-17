import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { formDataType, ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles({
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    backgroundColor: "#F5EEF8",
    padding: "20px 100px",
    border: "2px solid black",
    borderRadius: "10px",
    margin: "20px 150px",
  },
  formGroup: {
    gap: "10px",
    padding: "10px",
  },
  formHeading: {
    textAlign: "left",
    marginLeft: "150px",
  },
  form__back__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginLeft: "580px",
  },
  form__submit__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginRight: "580px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const BasicInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const phoneNoRegex = "^[0-9-]+$|^$";
  const emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    props.setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    props.setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <React.Fragment>
      <h1>Add Employee</h1>
      <form>
        <Link to={`/`}>
          <button className={classes.form__back__button}>Back</button>
        </Link>
        <h2 className={classes.formHeading}>Basic Info</h2>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              label="Employee ID"
              id="employeeID"
              name="employeeID"
              value={props.data.employeeID}
              required={true}
              onChange={handleChange}
              helperText={props.errors.employeeID}
              error={Boolean(props.errors.employeeID)}
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              label="First Name"
              id="firstName"
              name="firstName"
              value={props.data.firstName}
              required={true}
              onChange={handleChange}
              helperText={props.errors.firstName}
              error={Boolean(props.errors.firstName)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Last Name"
              name="lastName"
              value={props.data.lastName}
              required={true}
              onChange={handleChange}
              helperText={props.errors.lastName}
              error={Boolean(props.errors.lastName)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Company"
              name="company"
              value={props.data.company}
              required={true}
              onChange={handleChange}
              helperText={props.errors.company}
              error={Boolean(props.errors.company)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Phone No"
              name="phoneNo"
              value={props.data.phoneNo}
              required={true}
              helperText={props.errors.phoneNo}
              error={Boolean(props.errors.phoneNo)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.match(phoneNoRegex)) {
                  handleChange(event);
                }
              }}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Email"
              name="email"
              value={props.data.email}
              required={true}
              helperText={props.errors.email}
              error={Boolean(props.errors.email)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.match(emailRegex)) {
                  handleChange(event);
                }
              }}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BasicInfoAdd;
