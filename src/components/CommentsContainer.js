import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shaffi Khan",
      text: "This is the comments by Shaffi Khan",
      replies: [
        {
          name: "Shaffi Khan",
          text: "This is the comments by Shaffi Khan",
          replies: [
            {
              name: "Shaffi Khan",
              text: "This is the comments by Shaffi Khan",
              replies: [],
            },
            {
              name: "Shaffi Khan",
              text: "This is the comments by Shaffi Khan",
              replies: [],
            },
            {
              name: "Shaffi Khan",
              text: "This is the comments by Shaffi Khan",
              replies: [
                {
                  name: "Shaffi Khan",
                  text: "This is the comments by Shaffi Khan",
                  replies: [
                    {
                      name: "Shaffi Khan",
                      text: "This is the comments by Shaffi Khan",
                      replies: [
                        {
                          name: "Shaffi Khan",
                          text: "This is the comments by Shaffi Khan",
                          replies: [],
                        },
                        {
                          name: "Shaffi Khan",
                          text: "This is the comments by Shaffi Khan",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Shaffi Khan",
                      text: "This is the comments by Shaffi Khan",
                      replies: [],
                    },
                    {
                      name: "Shaffi Khan",
                      text: "This is the comments by Shaffi Khan",
                      replies: [],
                    },
                  ],
                },
                {
                  name: "Shaffi Khan",
                  text: "This is the comments by Shaffi Khan",
                  replies: [],
                },
                {
                  name: "Shaffi Khan",
                  text: "This is the comments by Shaffi Khan",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Shaffi Khan",
          text: "This is the comments by Shaffi Khan",
          replies: [],
        },
      ],
    },
    {
      name: "Shaffi Khan",
      text: "This is the comments by Shaffi Khan",
      replies: [
        {
          name: "Shaffi Khan",
          text: "This is the comments by Shaffi Khan",
          replies: [],
        },
        {
          name: "Shaffi Khan",
          text: "This is the comments by Shaffi Khan",
          replies: [],
        },
      ],
    },
    {
      name: "Shaffi Khan",
      text: "This is the comments by Shaffi Khan",
      replies: [],
    },
    {
      name: "Shaffi Khan",
      text: "This is the comments by Shaffi Khan",
      replies: [],
    },
    {
      name: "Shaffi Khan",
      text: "This is the comments by Shaffi Khan",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex flex-row bg-gray-100 rounded-md p-2 mt-2">
        <img
          className="w-10 h-10"
          alt="User"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <Comment data={comment} />
              <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="m-2 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
