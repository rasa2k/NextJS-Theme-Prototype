import React, { ComponentProps } from "react";
import { ListItem, ListItemText, ListItemIcon, Checkbox, FormControlLabel } from "@mui/material";

import * as Icons from "@dhi/icons";
import {
  StyledSmallAccordion,
  StyledSmallAccordionSummary,
  StyledSmallAccordionDetails,
  StyledList,
  StyledListItem,
  Circle,
} from "../../styles/styles";

interface SignalsProps {
  title: string;
}

function not(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: number[], b: number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: number[], b: number[]) {
  return [...a, ...not(b, a)];
}

function SignalsList({ title }: SignalsProps) {
  const [checked, setChecked] = React.useState<number[]>([]);
  const [listitems] = React.useState<number[]>([0, 1, 2, 3]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: number[]) => intersection(checked, items).length;

  const handleToggleAll = (items: number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  return (
    <>
      <StyledSmallAccordion elevation={0} square={true}>
        <StyledSmallAccordionSummary expandIcon={<Icons.Down />} aria-controls="panel1a-content" id="panel1a-header">
          <FormControlLabel
            onClick={(event) => event.stopPropagation()}
            control={
              <Checkbox
                onClick={handleToggleAll(listitems)}
                checked={numberOfChecked(listitems) === listitems.length && listitems.length !== 0}
                indeterminate={numberOfChecked(listitems) !== listitems.length && numberOfChecked(listitems) !== 0}
                disabled={listitems.length === 0}
                inputProps={{ "aria-label": "all items selected" }}
              />
            }
            label={`${title} ${numberOfChecked(listitems) > 0 ? "(" + numberOfChecked(listitems) + ")" : ""}`}
          />
        </StyledSmallAccordionSummary>
        <StyledSmallAccordionDetails>
          <StyledList>
            {listitems.map((value: number) => {
              const labelId = `transfer-list-all-item-${value}-label`;

              return (
                <StyledListItem key={value} role="listitem" onClick={handleToggle(value)}>
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <Circle />
                  <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                </StyledListItem>
              );
            })}
            <ListItem />
          </StyledList>
        </StyledSmallAccordionDetails>
      </StyledSmallAccordion>
    </>
  );
}

export default SignalsList;
