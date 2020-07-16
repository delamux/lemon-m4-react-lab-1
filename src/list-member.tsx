import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "./list";

interface Props {
  member: MemberEntity;
}

export const ListMember: React.FC<Props> = ({ member }) => {
  return (
    <>
      <tr>
        <td>
          <img src={member.avatar_url} style={{ width: "5rem" }} />
        </td>
        <td>
          <span>{member.id}</span>
        </td>
        <td>
          <Link to={generatePath("/detail/:id", { id: member.login })}>
            {member.login}
          </Link>{" "}
        </td>
      </tr>
    </>
  );
};
