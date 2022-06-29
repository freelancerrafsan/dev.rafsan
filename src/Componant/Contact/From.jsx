import React from "react";

const From = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="inputBox">
        <form onSubmit={submit}>
          <input type="text" placeholder="fast name" />
          <input type="text" placeholder="secnd name" />
          <input type="email" placeholder="enter email" />
          <textarea type="text" placeholder="massage" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default From;
