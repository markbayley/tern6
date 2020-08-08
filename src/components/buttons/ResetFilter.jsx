import React from "react";
import { Button } from "react-bootstrap";

function ResetFilter({ resetFilter }) {
  return (
    <Button
      style={{ padding: "3px 3px 0px 3px", marginRight: '20px', float: "right"}}
      variant="reset"
      size="sm"
      onClick={resetFilter}
    >
      <img src="/img/icons/reset-icon-white.png" alt="reset" width="30px" />
    </Button>
  );
}

export default ResetFilter;
