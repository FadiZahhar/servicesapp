import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

interface HtmlFieldProps {
    value: string;
    onChange: (content: string) => void;
    id:string;
    label:string;
    register:any;
    error:any;
  }
  
  const HtmlField: React.FC<HtmlFieldProps> = ({ value, onChange, id,label,register,error}) => {
    // State to manage loading state
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return (
       <>
       {isLoading && <LoadingIndicator />}
       <p className="text-lg mt-6 font-semibold">{label}</p>
      <Editor
        initialValue={''}
        id={id}
        {...register(id)}
        apiKey='a0xoljmaxvsnab127qfwn6o68ibhvyplkti81n5ksb8jg141'
        onInit={() => setIsLoading(false)}
        init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (request: any, respondWith: { string: (arg0: () => Promise<never>) => any; }) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
          }}
        onEditorChange={(content, editor) => onChange(content)}
      />
      {error && (
            <p className='error'>
              {error}
            </p>
          )}
      </>
    );
  };
  
  export default HtmlField;
  