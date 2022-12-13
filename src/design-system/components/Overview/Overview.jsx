import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Overview({ icon, title, children }) {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
