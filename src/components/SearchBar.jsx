import { TextField, Typography } from "@mui/material";
import React from "react";

const SearchBar = ({ onChange, value }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
        Search Character:
      </Typography>
      <TextField
        placeholder="search character by name"
        fullWidth
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
