import React from "react";
import { columns } from "./columns";
import {School } from "@prisma/client";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllSchools } from "@/actions/schools";

export default async function page() {
  const schools: School[] = (await getAllSchools()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Schools
        "
        linkTitle="Add School"
        href="/dashboard/schools/new"
        data={schools}
        model="school"
      />
      <div className="py-8">
        <DataTable data={schools} columns={columns} />
      </div>
    </div>
  );
}
