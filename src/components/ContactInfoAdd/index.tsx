import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
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
    textAlign:"left",
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

const ContactInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

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

    props.setErrors((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /** 
       This Method for validation on the Input Field
      */
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...props.errors };

    const validationFields = [
      "address1",
    ];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        props.data[key as keyof typeof props.data] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    if (props.data.address1.length < 5) {
      copyErrors.address1 = "Address Must contain at least 5 characters";
      hasError = true;
    } else {
      copyErrors.address1 = "";
    }

    props.setErrors(copyErrors);

    return hasError;
  };

  return (
    <React.Fragment>
      <h2 className={classes.formHeading}>Contact Info</h2>
      <form>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              label="Address 1"
              id="address1"
              name="address1"
              value={props.data.address1}
              required={true}
              onChange={handleChange}
              helperText={props.errors.address1}
              error={Boolean(props.errors.address1)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Address 2"
              id="address2"
              name="address2"
              value={props.data.address2}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Address 3"
              id="address3"
              name="address3"
              value={props.data.address3}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Address 4"
              id="address4"
              name="address4"
              value={props.data.address4}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactInfoAdd;
