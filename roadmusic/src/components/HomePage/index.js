import React, { useEffect } from "react";
import { Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken")

    if (accessToken === null) {
      history.push("/")
    } else {
    }
  }, [history])

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

    return(
        <div>
          <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
          <Typography variant={'h2'} gutterBottom>RoadMusic</Typography>
        </div>
    )
}

export default HomePage;