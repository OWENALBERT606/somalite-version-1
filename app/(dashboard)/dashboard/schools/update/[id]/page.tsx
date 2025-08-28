
import { getSchoolById } from "@/actions/schools";
import NewSchoolForm from "@/components/Forms/new-school-form";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const school = await getSchoolById(id);
  return (
    <div className="p-8">
      <NewSchoolForm initialData={school} editingId={id} />
    </div>
  );
}
