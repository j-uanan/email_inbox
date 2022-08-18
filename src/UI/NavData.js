import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const NavData = [
  {
    path: "/",
    title: "Inbox",
    icon: <AiIcons.AiFillHome />,
  },
  {
    path: "/sent",
    title: "Sent",
    icon: <AiIcons.AiOutlineSend />,
  },
  {
    path: "/deleted",
    title: "Deleted",
    icon: <IoIcons.IoTrashOutline />,
  },
];
