import Proptypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsX } from "react-icons/bs";

export function InputTag({ label, id, onChange, ...rest }) {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null);

  function handleTagAdd() {
    if (tag !== "") {
      setTags((prevTags) => [...prevTags, tag]);
    }
    setTag("");
    inputRef.current.focus();
  }

  function handleTagRemove(tagToRemove) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  }

  function handleInputKeyDown(e) {
    if (e.key === "Enter") handleTagAdd();
  }

  useEffect(() => {
    if (onChange) onChange(tags);
  }, [tags]);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-light-400">{label}</label>}
      <div className="w-full flex items-center flex-wrap p-3 gap-3 bg-dark-900 rounded-md">
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <div
              key={String(index)}
              className="rounded-lg py-2 px-4 flex gap-1 bg-light-600"
            >
              <p className="text-light-100">{tag}</p>
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="text-light-100 hover:border rounded-full mt-1 border-light-100"
              >
                <BsX />
              </button>
            </div>
          ))}
        <div className="border border-dashed border-light-500 py-2 px-4 flex gap-1 items-center rounded-lg">
          <input
            id={id}
            className="text-light-500 placeholder:text-light-500 bg-transparent outline-none w-20"
            type="text"
            name={id}
            placeholder="Adicionar"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={handleInputKeyDown}
            ref={inputRef}
            {...rest}
          />
          <button
            type="button"
            onClick={handleTagAdd}
            className="text-light-500 hover:border rounded-full mt-1 border-light-500"
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

InputTag.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
  onChange: Proptypes.func,
};
