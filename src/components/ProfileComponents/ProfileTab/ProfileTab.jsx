import React from "react";
import { AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const ProfileTab = () => (
  <Tabs
    defaultActiveKey="2"
    items={[
      {
        title: "lox",
        img: "data:image/png;base64,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",
      },
      { title: "asdasdasdasd", img: AppleOutlined },
      { title: "chopoooooort", img: AppleOutlined },
      { title: "lox", img: AppleOutlined },
    ].map((chort, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <img
              src={chort.img}
              alt="chooooort"
              style={{ width: "50px", heigth: "50px" }}
            />
            <p>{chort.title}</p>

            {/* {id == 1 ? "About" : "ok"} */}
          </span>
        ),
        key: id,
        children: `Tab ${chort.title}`,
      };
    })}
  />
);
export default ProfileTab;
