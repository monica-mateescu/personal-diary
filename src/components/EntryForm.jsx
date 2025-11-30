import { useState } from "react";
import Button from "./Button";
import { useModal } from "../contexts/ModalContext";

const EntryForm = () => {
  const { setOpen } = useModal();
  const [form, setForm] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, date, image, content } = form;

    if (!title.trim() || !date.trim() || !image.trim() || !content.trim())
      return;

    setOpen(false);
  };

  const disabled =
    !form.title.trim() ||
    !form.date.trim() ||
    !form.image.trim() ||
    !form.content.trim();

  return (
    <>
      <h3 className="font-bold text-lg text-center mb-4">
        Write your thoughts ✍
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-base-200 border-base-300 rounded-box border p-4"
      >
        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend">Title</legend>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full input"
            placeholder="Title Entry"
          />
          <legend className="fieldset-legend">Date</legend>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full input"
          />
          <legend className="fieldset-legend">Image URL</legend>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full input"
            placeholder="https://"
          />

          <legend className="fieldset-legend">Content</legend>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="w-full textarea h-24"
            placeholder="How was your day?"
          ></textarea>
        </fieldset>
        <Button
          label="Save Entry"
          className="btn-primary w-full"
          disabled={disabled}
        />
      </form>
    </>
  );
};

export default EntryForm;
