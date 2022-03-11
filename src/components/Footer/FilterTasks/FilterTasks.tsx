import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { useSearchParams } from "react-router-dom";
import { FILTERS } from "./Constants";
import { setMarkerActionCreator } from "../../../redux/actions";
import { receiveMarker } from "../../../redux/selectors";

import styled from "styled-components";

const FilterTasks: React.FC = () => {
  const marker: string = useSelector(receiveMarker);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const filterQuery = searchParams.get("filter") || "";
  // console.log(filterQuery);

  const dispatch = useDispatch();

  const getFilter = (e: React.MouseEvent): void => {
    const button = e.target as HTMLElement;
    
    dispatch(setMarkerActionCreator(button.innerText.toLocaleLowerCase()));
    // const query = button.innerText.toLocaleLowerCase();
    // setSearchParams({ filter: query });

    // console.log(query);
  };

  return (
    <>
      {FILTERS.map((btn) => (
        <Root>
          <Btn
            key={btn}
            onClick={getFilter}
            active={marker === btn.toLocaleLowerCase()}
          >
            {btn}
          </Btn>
        </Root>
      ))}
    </>
  );
};

const Root = styled.li`
  display: inline-block;
`;

export const Btn = styled.button<{ active: boolean }>`
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
