"use client";

import { useState, useRef,useEffect } from "react";

import { z } from "zod";
import { taskSchema } from "@/lib/tasksschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTitle from "../../Fields/FormTitle";
import Input from "../../Fields/Input";
import HtmlField from "../../Fields/HtmlField";
import Select from "../../Fields/Select";
import { taskStatusDetails } from "@/lib/data";
import TimeField from "../../Fields/TimeField";
import TimeEstimated from "../../Fields/TimeEstimated/TimeEstimated";
import DateField from "../../Fields/DateField";
import SubmitButton from "../../Fields/SubmitButton";

import Spinner from "../../Spinner";
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
  updateDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { GRID_DATETIME_COL_DEF } from "@mui/x-data-grid";
import CalednarField from "../../Fields/CalendarField";
import TimeRangeField from "../../Fields/TimeRangeField";
import HourField from "../../Fields/HourField";
import MinuteField from "../../Fields/MinuteField";

type Inputs = z.infer<typeof taskSchema>;
export default function EditFormTasks() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [content, setContent] = useState<string>("");
  const docId = "FFUlOHLQrXzCPPgIpJlU";

  // FFUlOHLQrXzCPPgIpJlU   // id for test

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
    resolver: zodResolver(taskSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    console.log("data of the form is ", data);
    await saveNewTask(data);
  };

  const saveNewTask = async (data: any) => {
    // Assuming 'tasks' is your collection name
    const tasksCollectionRef = doc(db, "tasks", docId);
    const formattedTaskData = {
      ...data,
      //startDate: Timestamp.fromDate(data.startDate),
      //endDate:Timestamp.fromDate(data.endDate),
      createdAt: serverTimestamp(), // Sets the current server timestamp
      updatedAt: serverTimestamp(), // Sets the current server timestamp
    };

    try {
      const docRef = await updateDoc(tasksCollectionRef, formattedTaskData);
      console.log("Task update successfully with ID: ", docRef);
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    await handleSubmit(processForm)();

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const fetchData = async () => {
    const docRef = doc(db, "tasks", docId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setValue("packageId", docSnap.data().packageId);
        setValue("taskName", docSnap.data().taskName);
        setValue("taskDescription", docSnap.data().taskDescription);
        setValue("taskStatus", docSnap.data().taskStatus);
        setValue("timeEstimatedInHours", docSnap.data().timeEstimatedInHours);
        setValue(
          "timeEstimatedInMinutes",
          docSnap.data().timeEstimatedInMinutes
        );
        setValue("timeConsumedInHours", docSnap.data().timeConsumedInHours);
        setValue("timeConsumedInMinutes", docSnap.data().timeConsumedInMinutes);
        setValue("startDate", docSnap.data().startDate);
        setValue("endDate", docSnap.data().endDate);
        setValue("taskNotes", docSnap.data().taskNotes);

        console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to run function

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      {/* adding the title for the form such cread / edit */}
      <FormTitle title="Create A Task" />

      <div className="w-full md:w-[50%] mt-6 px-3">
        <form ref={formRef} onSubmit={handleSubmit(processForm)}>
          <Input
            id="packageId"
            label="packageId"
            type="text"
            register={register}
            error={errors.packageId?.message}
          />

          <Input
            id="taskName"
            label="Task Name"
            type="text"
            register={register}
            error={errors.taskName?.message}
          />

          <Input
            id="taskDescription"
            type="textarea"
            label="Task Description"
            register={register}
            error={errors.taskDescription?.message}
          />

          <Select
            id="taskStatus"
            label="Task Curent Status"
            register={register}
            options={taskStatusDetails}
            error={errors.taskStatus?.message}
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
            id="taskNotes"
            label="Task Notes"
            type="textarea"
            register={register}
            error={errors.taskNotes?.message}
          />

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
