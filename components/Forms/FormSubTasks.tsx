"use client";

import { useState, useRef } from "react";

import { z } from "zod";
import { subTaskSchema } from "@/lib/subtasksschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTitle from "../Fields/FormTitle";
import Input from "../Fields/Input";
import HtmlField from "../Fields/HtmlField";
import Select from "../Fields/Select";
import { taskStatusDetails } from "@/lib/data";
import TimeField from "../Fields/TimeField";
import TimeEstimated from "../Fields/TimeEstimated/TimeEstimated";
import DateField from "../Fields/DateField";
import SubmitButton from "../Fields/SubmitButton";

import Spinner from "../Spinner";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { GRID_DATETIME_COL_DEF } from "@mui/x-data-grid";
import CalednarField from "../Fields/CalendarField";
import TimeRangeField from "../Fields/TimeRangeField";
import HourField from "../Fields/HourField";
import MinuteField from "../Fields/MinuteField";

type Inputs = z.infer<typeof subTaskSchema>;
export default function FormTasks() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [content, setContent] = useState<string>("");

  const submitForm = () => {
    if (formRef.current) {
      console.log("current is ", formRef.current);
      formRef.current.preventDefault();
      formRef.current.submit();
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(subTaskSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    console.log("data of the form is ", data);
    await subsaveNewTask(data);
  };

  const subsaveNewTask = async (data: any) => {
    // Assuming 'tasks' is your collection name
    const subtasksCollectionRef = collection(db, "subtasks");
    const formattedTaskData = {
      ...data,
      //startDate: Timestamp.fromDate(data.startDate),
      //endDate:Timestamp.fromDate(data.endDate),
      createdAt: serverTimestamp(), // Sets the current server timestamp
      updatedAt: serverTimestamp(), // Sets the current server timestamp
    };

    try {
      const docRef = await addDoc(subtasksCollectionRef, formattedTaskData);
      console.log("SubTask saved successfully with ID: ", docRef.id);
    } catch (error) {
      console.error("Error saving subtask: ", error);
    }
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    await handleSubmit(processForm)();

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      {/* adding the title for the form such cread / edit */}
      <FormTitle title="Create A SubTask" />

      <div className="w-full md:w-[50%] mt-6 px-3">
        <form ref={formRef} onSubmit={handleSubmit(processForm)}>
          <Input
            id="taskId"
            label="Task Id"
            type="text"
            register={register}
            error={errors.taskId?.message}
          />

          <Input
            id="subtaskName"
            label="SubTask Name"
            type="text"
            register={register}
            error={errors.subtaskName?.message}
          />

          <Input
            id="subtaskDescription"
            type="textarea"
            label="SubTask Description"
            register={register}
            error={errors.subtaskDescription?.message}
            value={content}
          />

          <Select
            id="subtaskStatus"
            label="SubTask Curent Status"
            register={register}
            options={taskStatusDetails}
            error={errors.subtaskStatus?.message}
          />

          <HourField
            id="timeEstimatedInHours"
            type="number"
            label="Time Estimated in Hours"
            register={register}
            error={errors.timeEstimatedInHours?.message}
          />

          <MinuteField
            id="timeEstimatedInMinutes"
            type="number"
            label="Time Estimated in Minutes"
            register={register}
            error={errors.timeEstimatedInMinutes?.message}
          />

          <HourField
            id="timeConsumedInHours"
            type="number"
            label="Time Consumed in hours"
            register={register}
            error={errors.timeConsumedInHours?.message}
          />

          <MinuteField
            id="timeConsumedInMinutes"
            type="number"
            label="Time Consumed in Minutes"
            register={register}
            error={errors.timeConsumedInMinutes?.message}
          />

          <DateField
            id="startDate"
            label="Start Date"
            register={register}
            error={errors.startDate?.message}
          />

          <DateField
            id="endDate"
            label="End Date"
            register={register}
            error={errors.endDate?.message}
          />

          <Input
            id="subtaskNotes"
            label="SubTask Notes"
            type="textarea"
            register={register}
            error={errors.subtaskNotes?.message}
          />

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
