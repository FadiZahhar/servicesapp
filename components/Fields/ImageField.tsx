import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface ImageFieldProps {
  setImageFile: Dispatch<SetStateAction<File | null>>;
}

const ImageField: React.FC<ImageFieldProps> = ({ setImageFile }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
  };

  return (
    <div>
      <label htmlFor="image">Upload Image:</label>
      <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageField;
