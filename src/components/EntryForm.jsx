import Button from "./Button";

const EntryForm = () => {
  return (
    <>
      <h3 className="font-bold text-lg text-center mb-4">
        Write your thoughts ✍
      </h3>
      <form className="w-full bg-base-200 border-base-300 rounded-box border p-4">
        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend">Title</legend>
          <input
            type="text"
            name="title"
            className="w-full input"
            placeholder="Title Entry"
          />
          <legend className="fieldset-legend">Date</legend>
          <input type="date" name="date" className="w-full input" />
          <legend className="fieldset-legend">Image URL</legend>
          <input
            type="tex"
            name="image"
            className="w-full input"
            placeholder="Add the URL here"
          />

          <legend className="fieldset-legend">Content</legend>
          <textarea
            name="content"
            className="w-full textarea h-24"
            placeholder="How was your day?"
          ></textarea>
        </fieldset>
        <Button label="Save Entry" className="btn-primary w-full" />
      </form>
    </>
  );
};

export default EntryForm;
