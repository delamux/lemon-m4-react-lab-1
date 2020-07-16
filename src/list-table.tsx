import React from "react";
import { MemberEntity } from "./list";
import { ListMember } from "./list-member";

interface Props {
  members: MemberEntity[];
}

export const ListTable: React.FC<Props> = ({ members }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <ListMember key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
  );
};
