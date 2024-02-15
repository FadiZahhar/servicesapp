'use client'

import { useState, useRef } from 'react'

import { z } from 'zod'
import { taskSchema } from '@/lib/tasksschema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormTitle from '../Fields/FormTitle';
import Input from '../Fields/Input';
import HtmlField from '../Fields/HtmlField';
import Select from '../Fields/Select';
import { taskStatusDetails } from '@/lib/data';
import TimeField from '../Fields/TimeField';
import TimeEstimated from '../Fields/TimeEstimated/TimeEstimated';

type Inputs = z.infer<typeof taskSchema>
export default function FormTasks() {
    const formRef = useRef<HTMLFormElement>(null);
    const [content, setContent] = useState<string>("");

    const handleEditorChange = (content: string) => {
        setContent(content);
      };

      const handleTimeChange = (hours: number, minutes: number) => {
        console.log(`Estimated Time: ${hours} hours and ${minutes} minutes`);
      };

    const submitForm = () => {
        if (formRef.current) {
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
        formState: { errors }
      } = useForm<Inputs>({
        resolver: zodResolver(taskSchema)
      })

      const processForm: SubmitHandler<Inputs> = data => {
        console.log(data);
      }

      type FieldName = keyof Inputs

  const next = async () => {
        await handleSubmit(processForm)();

     // Scroll to the top of the page
     window.scrollTo(0, 0);
  }

    return(

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



            <HtmlField 
                id="taskDescription"
                label="Task Description"
                register={register}
                error={errors.taskName?.message}
                value={content} 
                onChange={handleEditorChange} />

            <Select 
            id="taskStatus"
            label="Task Curent Status"
            register={register}
            options={taskStatusDetails}
            error={errors.taskStatus?.message}
            />

            

            <TimeEstimated 
            id="timeEstimated"
            label="Time Estimated"
            register={register}
            error={errors.timeEstimated?.message}
            onChange={handleTimeChange} />

           <button type="submit">Submint</button>
          
           </form>

        </div>
        </section>
    );
}