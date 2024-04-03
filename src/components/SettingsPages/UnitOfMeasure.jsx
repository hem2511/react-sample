import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function UnitOfMeasure() {
  const [words, setWords] = useState(["M", "Cm", "mm"]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [addingNewWord, setAddingNewWord] = useState(false);
  const [newWord, setNewWord] = useState("");

  const handleDelete = (index) => {
    const newWords = [...words];
    newWords.splice(index, 1);
    setWords(newWords);
  };

  const handleAddNewWord = () => {
    setAddingNewWord(true);
  };

  const handleCancelNewWord = () => {
    setAddingNewWord(false);
    setNewWord("");
  };

  const handleSaveNewWord = () => {
    if (newWord.trim() !== "") {
      const newWords = [...words, newWord];
      setWords(newWords);
      setNewWord("");
      setAddingNewWord(false);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index, editedWord) => {
    const newWords = [...words];
    newWords[index] = editedWord;
    setWords(newWords);
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleNewWordChange = (event) => {
    setNewWord(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveNewWord();
    }
  };

  return (
    <div className="h-max w-max p-8 rounded-xl ">
      <div className="py-4  ">
        <table className="table-auto border-collapse border border-gray-300 ">
          <thead>
            <tr>
              <th className="border w-64 border-gray-100 px-4 py-2 flex max-[400px]:w-44">
                Unit{" "}
                <span className="m-1">
                  <IoIosArrowDown />
                </span>
              </th>
              <th className="border border-gray-300 px-2 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-3">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={word}
                      onChange={(event) =>
                        handleSaveEdit(index, event.target.value)
                      }
                      onBlur={() => handleSaveEdit(index, word)}
                      className="border border-gray-300 px-2 py-1 w-full"
                      autoFocus
                    />
                  ) : (
                    <span
                      onClick={() => handleEdit(index)}
                      className="cursor-pointer"
                    >
                      {word}
                    </span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {editingIndex !== index && (
                    <MdDelete
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(index)}
                    />
                  )}
                </td>
              </tr>
            ))}
            {addingNewWord && (
              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan="2">
                  <input
                    type="text"
                    value={newWord}
                    onChange={handleNewWordChange}
                    onKeyPress={handleKeyPress}
                    className="border border-gray-300 px-2 w-3/4 py-[3px]"
                    autoFocus
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {!addingNewWord && (
          <div className="mt-4">
            <button
              onClick={handleAddNewWord}
              className=" font-bold py-2 px-4 rounded "
            >
              + Add row
            </button>
          </div>
        )}
        {addingNewWord && (
          <div className="mt-4">
            <button
              onClick={handleSaveNewWord}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelNewWord}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UnitOfMeasure;
