import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { FILTERS } from "./Constants";
import { setMarker } from "../../../redux/actions";
import { receiveMarker } from "../../../redux/selectors";

import styled from "styled-components";

const FilterTasks: React.FC = () => {
  const marker: string = useSelector(receiveMarker);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter") || "";
  const getFilter = (e: React.MouseEvent): void => {
    const button = e.target as HTMLElement;
    const query = button.innerText.toLocaleLowerCase();
    if (query === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ filter: query });
    }

    dispatch(setMarker(button.innerText.toLocaleLowerCase()));
  };

  return (
    <>
      {FILTERS.map((btn) => (
        <Root key={btn}>
          <Button
            onClick={getFilter}
            active={marker === btn.toLocaleLowerCase()}
          >
            {btn}
          </Button>
        </Root>
      ))}
    </>
  );
};

const Root = styled.li`
  display: inline-block;
`;

export const Button = styled.button<{ active: boolean }>`
  display: block;
  width: 40px;
  border: hidden;
  color: #83756f;
  margin: 2px;
  cursor: pointer;
  background-color: #eaeaea;
  ${({ active }) => active && "font-weight: bold;"}
  text-transform: capitalize;
  padding-right: 5px;
`;

export default FilterTasks;
