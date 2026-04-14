import React from "react";

const Post = React.memo(({ values, func }) => {
  console.log("Post render.");

  return (
    <>
      <h2>
        My name is {values.name} and age is {values.age}
        {func()}
      </h2>
    </>
  );
});

export default Post;
