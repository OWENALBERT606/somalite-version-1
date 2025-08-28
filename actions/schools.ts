"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { SchoolProps } from "@/types/types"; // <-- Define this like CategoryProps but for School

// Create a school
export async function createSchool(data: SchoolProps) {
  const slug = data.slug;
  try {
    // Check if school with same slug exists
    const existingSchool = await db.school.findUnique({
      where: {
        slug,
      },
    });

    if (existingSchool) {
      return existingSchool;
    }

    const newSchool = await db.school.create({
      data,
    });

    revalidatePath("/dashboard/schools");
    return newSchool;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get all schools
export async function getAllSchools() {
  try {
    const schools = await db.school.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        admin: true,
        academicYears: true,
        classes: true,
        teachers: true,
        parents: true,
        students: true,
      },
    });

    return schools;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Update school by ID
export async function updateSchoolById(id: string, data: Partial<SchoolProps>) {
  try {
    const updatedSchool = await db.school.update({
      where: { id },
      data,
    });
    revalidatePath("/dashboard/schools");
    return updatedSchool;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get a single school by ID
export async function getSchoolById(id: string) {
  try {
    const school = await db.school.findUnique({
      where: { id },
      include: {
        admin: true,
        academicYears: true,
        classes: true,
        teachers: true,
        parents: true,
        students: true,
      },
    });
    return school;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Delete a school
export async function deleteSchool(id: string) {
  try {
    const deletedSchool = await db.school.delete({
      where: { id },
    });

    revalidatePath("/dashboard/schools");

    return {
      ok: true,
      data: deletedSchool,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Bulk create schools
export async function createBulkSchools(schools: SchoolProps[]) {
  try {
    for (const school of schools) {
      await createSchool(school);
    }
  } catch (error) {
    console.error(error);
  }
}
