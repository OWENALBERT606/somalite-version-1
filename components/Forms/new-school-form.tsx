"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import toast from "react-hot-toast";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";

import { School } from "@prisma/client";
import { createSchool, updateSchoolById } from "@/actions/schools";
import FormSelectInput from "../FormInputs/FormSelectInput";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type SchoolFormProps = {
  editingId?: string | undefined;
  initialData?: School | undefined | null;
    users?: SelectOptionProps[]; // for admin selection
};
export default function NewSchoolForm({
  users,
  editingId,
  initialData,
}: SchoolFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
  name: initialData?.name || "",
  motto: initialData?.motto || "",
  slug: initialData?.slug || "",
  address: initialData?.address || "",
  contact: initialData?.contact || "",
  contact2: initialData?.contact2 || "",
  contact3: initialData?.contact3 || "",
  email: initialData?.email || "",
  email2: initialData?.email2 || "",
  logo: initialData?.logo || "",

  // system fields
  status: initialData?.status ?? true,
  adminId: initialData?.adminId || "",

    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.logo || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const [selectedUser, setSelectedUser] = useState(users?.[0] || null);

  async function saveSchool(data: any) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.name);
      data.logo = imageUrl;
      data.adminId = selectedUser?.value || null;
      
      if (editingId) {
        await updateSchoolById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/schools");
        setImageUrl("/placeholder.svg");
      } else {
        await createSchool(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        setImageUrl("/placeholder.svg");
        //route
        router.push("/dashboard/schools");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  // async function handleDeleteAll() {
  // setLoading(true);
  // try {
  // await deleteManyCategories();
  // setLoading(false);
  // } catch (error) {
  // console.log(error);
  // }
  // }
  console.log(status);

  return (
    <form className="" onSubmit={handleSubmit(saveSchool)}>
      <FormHeader
        href="/schools"
        parent=""
        title="School"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8  col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>School Name</CardTitle>
              <CardDescription>
                .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid  gap-6">
                <div className="grid grid-cols-2 gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="School Name"
                    name="name"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="School Motto"
                    name="motto"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Phone Number 1"
                    name="contact"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Phone Number 2"
                    name="contact2"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Email Address 1"
                    name="email"
                    type="email"
                  />
                <FormSelectInput
                label="User"
                  options={users ?? []}   // ✅ fallback to []
                option={selectedUser}
                setOption={setSelectedUser}
                isSearchable={true}
              />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="School Address"
                    name="address"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            <ImageInput
              title="School Badge / Logo"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="schoolLogo"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/categories"
        editingId={editingId}
        loading={loading}
        title="Category"
        parent=""
      />
    </form>
  );
}
