//import { User, Lock } from "@dhi/icons";
import * as Icons from "@dhi/icons";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import { ActionType } from "../../store/ActionTypes";
import { MessageType } from "../../store/Reducers/message";
import { IUserState } from "../../store/Reducers/user";
import { Box, FormControl, Grid, TextField, InputAdornment, Button, styled } from "@mui/material";

const getUser = async () => {
  const user: IUserState = {
    id: "1",
    username: "johndoe",
    fullname: "John Doe",
    initials: "JD",
    email: "johndoe@gmail.com",
  };
  return user;
};

const LoginGrid = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexWrap: "wrap",
  flexDirection: "column",
  listStyle: "none",
  height: "calc(100vh - 60px)",
  "& > .MuiFormControl-root": {
    background: "white",
    padding: 20,
    minWidth: 400,
  },
  "& svg": {
    width: 30,
  },
}));

function LoginPanel() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  return (
    <>
      <LoginGrid>
        <FormControl>
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <TextField
                disabled={globalState.user ? true : false}
                type="text"
                label="Email"
                variant="standard"
                defaultValue="johndoe@gmail.com"
                style={{ width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icons.User />
                    </InputAdornment>
                  ),
                }}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </Grid>

            <Grid item>
              <TextField
                disabled={globalState.user ? true : false}
                type="password"
                label="Password"
                variant="standard"
                defaultValue="123456123456"
                style={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                id="my-input"
                aria-describedby="my-helper-text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icons.Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid container item spacing={2}>
              {globalState.user ? (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                    onClick={() => {
                      globalDispatch({
                        type: ActionType.UNSET_USER,
                      });
                      globalDispatch({
                        type: ActionType.SET_MESSAGE,
                        data: {
                          message: `You have successfully logged out`,
                          messageshow: true,
                          messagetype: MessageType.INFO,
                        },
                      });
                    }}
                  >
                    LOGOUT
                  </Button>
                </Grid>
              ) : (
                <>
                  <Grid item xs={6}>
                    <Button variant="outlined" color="primary" style={{ width: "100%" }} onClick={() => {}}>
                      RESET
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: "100%" }}
                      onClick={async () => {
                        const userdata = await getUser();
                        globalDispatch({
                          type: ActionType.SET_USER,
                          data: userdata,
                        });
                        globalDispatch({
                          type: ActionType.SET_MESSAGE,
                          data: {
                            message: `You have successfully logged in`,
                            messageshow: true,
                            messagetype: MessageType.SUCCES,
                          },
                        });
                      }}
                    >
                      LOGIN
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </FormControl>
      </LoginGrid>
    </>
  );
}

export default LoginPanel;
