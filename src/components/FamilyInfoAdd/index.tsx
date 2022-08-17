import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  // handleSubmit: (e: React.FormEvent) => void;
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

const FamilyInfoAdd: React.FC<DemoFormProps> = (props) => {
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

    props.setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /** 
       This Method for validation on the Input Field
      */
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...props.errors };

    const validationFields = ["fathersName, mothersName"];

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

    if (props.data.fathersName.length < 3) {
      copyErrors.fathersName =
        "Father's Name Must Required";
      hasError = true;
    } else {
      copyErrors.fathersName = "";
    }

    if (props.data.mothersName.length < 3) {
      copyErrors.mothersName = "Mother's Name Must Required";
      hasError = true;
    } else {
      copyErrors.mothersName = "";
    }

    props.setErrors(copyErrors);

    return hasError;
  };

  return (
    <React.Fragment>
      <h2 className={classes.formHeading}>Family Info</h2>
      <form>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              label="Father's Name"
              id="fathersName"
              name="fathersName"
              value={props.data.fathersName}
              required={true}
              onChange={handleChange}
              helperText={props.errors.fathersName}
              error={Boolean(props.errors.fathersName)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Father's Profession"
              id="fathersProfession"
              name="fathersProfession"
              value={props.data.fathersProfession}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Mother's Name"
              id="mothersName"
              name="mothersName"
              value={props.data.mothersName}
              required={true}
              onChange={handleChange}
              helperText={props.errors.mothersName}
              error={Boolean(props.errors.mothersName)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Mother's Profession"
              id="mothersProfession"
              name="mothersProfession"
              value={props.data.mothersProfession}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FamilyInfoAdd;
