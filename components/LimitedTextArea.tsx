import React, { useState, ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  name: string;
}

const textareaRows = 4;

const LimitedTextArea = ({
  value,
  onChange,
  placeholder,
  name,
}: TextAreaProps) => {
  const [text, setText] = useState(value);
  const letterCount = text.length;
  const letterLimit = 400;

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<any> | string
  ) => {
    const inputValue = typeof event === "string" ? event : event.target.value;

    if (inputValue.length <= letterLimit) {
      setText(inputValue);
      onChange(inputValue);
    }
  };

  return (
    <div className="textArea">
      <p>{`${letterCount}/${letterLimit}`}</p>
      <textarea
        value={text}
        rows={textareaRows}
        required
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default LimitedTextArea;
