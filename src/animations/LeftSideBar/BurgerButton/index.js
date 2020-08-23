import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button } from "react-bootstrap";
import { LeftSideBarContext } from "../LeftSideBarContext";

const BurgerButton = ({ onClick, searchmode }) => {
  const { isShowSidebar } = useContext(LeftSideBarContext);

  return (
    <Button
      className="LeftSideBar__BurgerButton"
      role="button"
      variant="toggle"
      onClick={onClick}

    >
      {isShowSidebar && <i className="fa fa-chevron-right" />}
      {!isShowSidebar && (searchmode === "Map"
        ? (
          <>
            <i className="fa fa-chevron-left" />
            Images
          </>
        )
        : (
          <>
            <i className="fa fa-chevron-left" />
            Map
          </>
        )
      )}
    </Button>
  );
};

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  searchmode: PropTypes.string.isRequired,
};

export default BurgerButton;
