import {
    Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "../utils/constants/general";
import { useSearchParams } from "react-router-dom";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genderValue = searchParams.get("gender") || "";
  const statusValue = searchParams.get("status") || "";

  // console.log(Object.fromEntries(searchParams));
  // console.log(searchParams.get('key'));

  const genderChangeHandler = (e) => {
    searchParams.set("gender", e.target.value);
    setSearchParams(searchParams);
  };
  const statusChangeHandler = (e) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };
  const resetFiltersHandler = () =>{
    searchParams.delete("gender")
    searchParams.delete("status")
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Typography variant="h5" sx={{ margin: "1rem 0" }}>
        {" "}
        Filtered by:{" "}
      </Typography>
      <Container>
        <FormControl className="form">
          <FormLabel>Gender</FormLabel>

          <StyledRadioGroup onChange={genderChangeHandler }  value={genderValue}>
            {GENDER_OPTIONS.map((option) => {
              return (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  control={<Radio />}
                />
              );
            })}
          </StyledRadioGroup>
        </FormControl>

        <FormControl className="form">
          <FormLabel>Status</FormLabel>
          <StyledRadioGroup onChange={statusChangeHandler} value={statusValue} >
            {STATUS_OPTIONS.map((option) => {
              return (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  control={<Radio />}
                />
              );
            })}
          </StyledRadioGroup>
        </FormControl>
        <Button variant="contained" onClick={resetFiltersHandler}>Clear All</Button>
      </Container>
    </div>
  );
};
const StyledRadioGroup = styled(RadioGroup)(() => {
  return {
    flexDirection: "row",
  };
});
const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  "& > .form": {
    border: "1px solid #d4e1dd",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    flex: "1",
  },
}));
//status and gender filteredgit init
export default FilterBar;
