import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";

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

const SkillInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    isValid();

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

    const validationFields = ["skill1"];

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

    if (props.data.skill1.length < 3) {
      copyErrors.skill1 = "Employee Must contain at least 1 Skill";
      hasError = true;
    } else {
      copyErrors.skill1 = "";
    }

    props.setErrors(copyErrors);

    return hasError;
  };

  return (
    <React.Fragment>
      <h2 className={classes.formHeading}>Skill Info</h2>
      <form>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              label="Skill-1"
              id="skill1"
              name="skill1"
              value={props.data.skill1}
              required={true}
              onChange={handleChange}
              helperText={props.errors.skill1}
              error={Boolean(props.errors.skill1)}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill 1 Experience"
              id="skill1Experience"
              name="skill1Experience"
              value={props.data.skill1Experience}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill-2"
              id="skill2"
              name="skill2"
              value={props.data.skill2}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill 2 Experience"
              id="skill2Experience"
              name="skill2Experience"
              value={props.data.skill2Experience}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill-3"
              id="skill3"
              name="skill3"
              value={props.data.skill3}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill 3 Experience"
              id="skill3Experience"
              name="skill3Experience"
              value={props.data.skill3Experience}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill-4"
              id="skill4"
              name="skill4"
              value={props.data.skill4}
              onChange={handleChange}
            />
          </div>

          <div className={classes.formGroup}>
            <TextField
              label="Skill 4 Experience"
              id="skill4Experience"
              name="skill4Experience"
              value={props.data.skill4Experience}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SkillInfoAdd;
