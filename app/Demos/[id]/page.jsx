import React from 'react';
import FormSubTasks from "@/components/Forms/FormSubTasks";
import BackEndLayout from "@/components/layouts/BackEndLayout"
import EditFormSubTasks from"@/components/Forms/edit/FormSubTasks"

const Page = (props) => {
  console.log(props)
  return (
    <div>
      <EditFormSubTasks id={props.params.id}/>
      
    </div>
  );
}

export default Page;
