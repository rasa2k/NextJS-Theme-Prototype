import { Button } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import { ActionType } from "../../store/ActionTypes";
import { IProgressState } from "../../store/Reducers/progress";

function StartProcess() {
  const [, globalDispatch] = useContext(GlobalContext);
  return (
    <>
      <Button
        variant="contained"
        style={{ width: "100%" }}
        onClick={async () => {
          const progressdata: IProgressState = {
            title: `Starting extraction`,
            id: Math.random().toString(16).slice(-4),
            progressValue: 0,
            browserStep: 0,
          };

          globalDispatch({
            type: ActionType.ADD_PROGRESS_ITEM,
            data: progressdata,
          });
        }}
      >
        START PROCESS
      </Button>
    </>
  );
}

export default StartProcess;
