import {
    DataGrid,
    GridColDef,
    GridToolbar,
  } from "@mui/x-data-grid";
  import "./datatable.scss";
import Link from "next/link";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  collection,
  doc,
  getDocs,
  Timestamp,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useRef } from "react";
  // import { useMutation, useQueryClient } from "@tanstack/react-query";
  
  type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
  };
  
  const DataTable = (props: Props) => {
  
    // TEST THE API
  
    // const queryClient = useQueryClient();
    // // const mutation = useMutation({
    // //   mutationFn: (id: number) => {
    // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
    // //       method: "delete",
    // //     });
    // //   },
    // //   onSuccess: ()=>{
    // //     queryClient.invalidateQueries([`all${props.slug}`]);
    // //   }
    // // });
  
    
  
    const handleDelete = async (id :any, slug:any) => {
      const DocRef = doc(db, slug, id)
      console.log(DocRef);
      try {
          await deleteDoc(DocRef)
          console.log('task deleted');
      } catch (err) {
          alert(err)
      }
      //delete the item
      // mutation.mutate(id)
    };
  
    const actionColumn: GridColDef = {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link href={`/${props.slug}/${params.row.id}`}>
              <GrEdit/>
            </Link>
            {/* <Link href={`/${props.slug}/${params.row.id}`}>
            <RiDeleteBin5Line />
            </Link> */}
            <button className="delete" onClick={() => handleDelete(params.row.id, props.slug)}>
              <RiDeleteBin5Line />
            </button>
          </div>
        );
      },
    };
  
    return (
      <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    );
  };
  
  export default DataTable;
  