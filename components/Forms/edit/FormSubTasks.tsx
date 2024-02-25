"use client";

import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { subTaskSchema } from "@/lib/subtasksschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTitle from "../../Fields/FormTitle";
import Input from "../../Fields/Input";
import Select from "../../Fields/Select";
import { taskStatusDetails } from "@/lib/data";
import DateField from "../../Fields/DateField";
import SubmitButton from "../../Fields/SubmitButton";
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
  getFirestore,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import HourField from "../../Fields/HourField";
import MinuteField from "../../Fields/MinuteField";
import { write } from "fs";

type Inputs = z.infer<typeof subTaskSchema>;
export default function EditFormSubTasks(info: any) {
  const docId = "kWynOxsSf3p43mOwFY5l";
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [content, setContent] = useState<string>("");
  const [search, setSearch] = useState("pamrara ");
  const [dataFir, setData] = useState(); // Declare a state variable...



  // to run function 

  useEffect(() => {
    fetchData();
  }, []);

  // for fetch Data from firebeas 

  const fetchData = async () => {
    const docRef = doc(db, "subtasks", docId);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
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
    await subeditNewsubTask(data);
  };

  //  to update databeas

  const subeditNewsubTask = async (data: any) => {
    // Assuming 'tasks' is your collection name
    const subtasksCollectionRef = doc(db, "subtasks", docId);
    const formattedTaskData = {
      ...data,
      //startDate: Timestamp.fromDate(data.startDate),
      //endDate:Timestamp.fromDate(data.endDate),
      createdAt: serverTimestamp(), // Sets the current server timestamp
      updatedAt: serverTimestamp(), // Sets the current server timestamp
    };

    try {
      const docRef = await updateDoc(subtasksCollectionRef, formattedTaskData);
      console.log("SubTask update successfully with ID: ", docRef);
    } catch (error) {
      console.error("Error updating subtask: ", error);
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
      <FormTitle title="Edit A SubTask" />
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
