import { getAllUsers } from "@/actions/users";
import NewSchoolForm from "@/components/Forms/new-school-form";
import React from "react";

export default async function page() {
    const allUsers = (await getAllUsers()) || [];
    const users = allUsers.map((item:any) => {
      return {
        label: item.email,
        value: item.id,
      };
    });
  return (
    <div className="p-8">
      <NewSchoolForm users={users}  />
    </div>
  );
}
