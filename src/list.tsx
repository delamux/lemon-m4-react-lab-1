import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ListTable } from "./list-table";

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>("");
  const [isEmptyList, setisEmptyList] = React.useState<boolean>(false);

  const getUsers = (organization: string = "") => {
    organization = organization || "lemoncode";
    setOrganization(organization);
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "Not Found") {
          setisEmptyList(true);
          setMembers([]);
        } else {
          setMembers(json);
          setisEmptyList(false);
        }
      });
  };

  const notFoundMessage = <h2 style={{ color: "red" }}>Not Found</h2>;
  const organizationList = isEmptyList ? (
    notFoundMessage
  ) : (
    <ListTable members={members} />
  );

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>
      <h3>{organization}</h3>
      <input type="text" onChange={(e) => setOrganization(e.target.value)} />
      <button type="button" onClick={() => getUsers(organization)}>
        Set organization
      </button>
      {organizationList}
    </>
  );
};
