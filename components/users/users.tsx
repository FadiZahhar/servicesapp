"use client";

import { GridColDef } from "@mui/x-data-grid";
import DataTable from "@/components/DataTable/DataTable";
import Add from "../add/Add";
import { userRows } from "@/lib/data";
import BackEndLayout from "@/components/layouts/BackEndLayout";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  Timestamp,
  setDoc,
  addDoc,
} from "firebase/firestore";
import "./users.scss";
import Image from "next/image";
import { set } from "zod";

// const docData = {
//   firstName: "omar",
//   lastName: "alkabouni",
//   phone: "71550996",
//   img:"https://picsum.photos/200",
//   email:"omar.alkabouni@gmail.com",
//   createdAt: Timestamp.fromDate(new Date("December 10, 1815")),
//   verified: true

// };

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },

  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

async function FetchDatafomFirebase() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const data: { id: string }[] = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
}

export default function UserTable() {
  const [data, setData] = useState<any | null>();
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //       const docRef = await addDoc(collection(db, "users"),docData );
      // console.log("Document written with ID: ", docRef.id);

      const data = await FetchDatafomFirebase();
      setData(data);
      setLoading(false);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      {/* <DataTable slug="users" columns={columns} rows={data} /> */}

      {/* TEST THE API */}

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
