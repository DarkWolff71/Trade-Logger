import React from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export function SignIn() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1
          className="flex justify-center items-center"
          style={{ height: "calc(2.5/6*100vh)" }}
        >
          <span className="text-green-700 text-9xl">$</span>
          <div className="text-8xl space-x-8">
            <span>Trade</span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-slate-400 to-green-800">
              Logger
            </span>
          </div>
          <span className="text-green-700 text-9xl">$</span>
        </h1>
        <TextField
          id="outlined-basic"
          label="Email / Username"
          variant="outlined"
          color="success"
          size="small"
        />
        <TextField
          className="mt-4"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color="success"
          size="small"
        />
        <Button className="mt-3" variant="contained" color="success">
          Submit
        </Button>

        <Divider>or</Divider>
      </div>

      {/* <div className="flex flex-col items-center">
      <h1 className="flex items-center space-x-8">
        <span className="text-green-700 text-9xl">$</span>
        <div className="text-8xl space-x-2">
          <span className="text-8xl">Trade</span>
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-slate-400 to-green-800 text-8xl">
            Logger
          </span>
        </div>
        <span className="text-green-700 text-9xl">$</span>
      </h1>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div> */}
    </>
  );
}
