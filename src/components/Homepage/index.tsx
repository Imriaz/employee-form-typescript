import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route, Routes, useNavigate } from "react-router-dom";
import BasicInfoAdd from "../BasicInfoAdd";
import ContactInfoAdd from "../ContactInfoAdd";
import EmployeeList from "../EmployeeList";
import FamilyInfoAdd from "../FamilyInfoAdd";
import { Employee } from "../model/model";
import SkillInfoAdd from "../SkillInfoAdd";
import NotFound from "../NotFound";

const useStyles = makeStyles({
  form__submit__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginRight: "580px",
  }
});

export type formDataType = {
  employeeID: string;
  firstName: string;
  lastName: string;
  company: string;
  designation: string;
  phoneNo: string;
  email: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  skill1: string;
  skill1Experience: string;
  skill2: string;
  skill2Experience: string;
  skill3: string;
  skill3Experience: string;
  skill4: string;
  skill4Experience: string;
  fathersName: string;
  fathersProfession: string;
  mothersName: string;
  mothersProfession: string;
};
const formData: formDataType = {
  employeeID: "",
  firstName: "",
  lastName: "",
  company: "",
  designation: "",
  phoneNo: "",
  email: "",
  address1: "",
  address2: "",
  address3: "",
  address4: "",
  skill1: "",
  skill1Experience: "",
  skill2: "",
  skill2Experience: "",
  skill3: "",
  skill3Experience: "",
  skill4: "",
  skill4Experience: "",
  fathersName: "",
  fathersProfession: "",
  mothersName: "",
  mothersProfession: "",
};

export type ErrorType = {
  [key: string]: string;
};

const initialError: ErrorType = {
  employeeID: "",
  firstName: "",
  lastName: "",
  company: "",
  designation: "",
  phoneNo: "",
  email: "",
  address1: "",
  skill1: "",
  fathersName: "",
  mothersName: "",
};

const Homepage = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [data, setData] = React.useState<formDataType>(formData);
  const [errors, setErrors] = React.useState(initialError);
  const classes = useStyles();
  const navigation = useNavigate();

  /** 
       This Method to Add Employee on the state
      */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setEmployees((prev) => [
        ...prev,
        {
          employeeID: data.employeeID,
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          phoneNo: data.phoneNo,
          email: data.email,
          address1: data.address1,
          address2: data.address2,
          address3: data.address3,
          address4: data.address4,
          skill1: data.skill1,
          skill1Experience: data.skill1Experience,
          skill2: data.skill2,
          skill2Experience: data.skill2Experience,
          skill3: data.skill3,
          skill3Experience: data.skill3Experience,
          skill4: data.skill4,
          skill4Experience: data.skill4Experience,
          fathersName: data.fathersName,
          fathersProfession: data.fathersProfession,
          mothersName: data.mothersName,
          mothersProfession: data.mothersProfession,
        },
      ]);
      // console.log(data.employeeID);
      setData({
        employeeID: "",
        firstName: "",
        lastName: "",
        company: "",
        designation: "",
        phoneNo: "",
        email: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        skill1: "",
        skill1Experience: "",
        skill2: "",
        skill2Experience: "",
        skill3: "",
        skill3Experience: "",
        skill4: "",
        skill4Experience: "",
        fathersName: "",
        fathersProfession: "",
        mothersName: "",
        mothersProfession: "",
      });
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  /** 
       This Method for validation on the Input Field
      */
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...errors };

    const validationFields = [
      "employeeID",
      "firstName",
      "lastName",
      "company",
      "phoneNo",
      "email",
    ];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        data[key as keyof typeof data] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    if (data.employeeID.length < 5) {
      copyErrors.employeeID = "Employee ID Must contain at least 5 digits";
      hasError = true;
    } else {
      copyErrors.employeeID = "";
    }

    if (data.address1.length < 5) {
      copyErrors.address1 = "Address must be required";
      hasError = true;
    } else {
      copyErrors.address1 = "";
    }

    setErrors(copyErrors);

    return hasError;
  };

  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeList employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/add"
          element={
            <form>
              <BasicInfoAdd
                data={data}
                setData={setData}
                errors={errors}
                setErrors={setErrors}
              />

              <ContactInfoAdd
                data={data}
                setData={setData}
                errors={errors}
                setErrors={setErrors}
              />

              <SkillInfoAdd
                data={data}
                setData={setData}
                errors={errors}
                setErrors={setErrors}
              />

              <FamilyInfoAdd
                data={data}
                setData={setData}
                errors={errors}
                setErrors={setErrors}
              />
              <button
                type="submit"
                className={classes.form__submit__button}
                onClick={(e: React.FormEvent) => {
                  if (isValid()) {
                    return;
                  }
                  handleSubmit(e);
                  console.log(employees);
                }}
              >
                Submit
              </button>
            </form>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Homepage;
