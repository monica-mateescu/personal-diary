import Button from "./Button";

const Header = ({ open, setOpen }) => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto navbar py-8">
        <h1 className="flex-1 text-4xl text-shadow-lg">My Diary</h1>
        <div className="flex-none">
          <Button
            label=" + New Entry"
            className="btn-primary"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
