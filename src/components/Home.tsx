import React from "react";
import Dropmenu from "./Dropmenu";
import MagnetIcon from "./icons/MagnetIcon";
import MenuIcon from "./icons/MenuIcon";
import TestButton from "./TestButton";
import UpLeftCursorIcon from "./icons/UpLeftCursorIcon";
import ColorPotIcon from "./icons/ColorPotIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import LeftCurvedArrowIcon from "./icons/LeftCurvedArrowIcon";
import PenIcon from "./icons/PenIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import RightArrowIcon from "./icons/RightArrowIcon";
import RightCurvedArrowIcon from "./icons/RightCurvedArrowIcon";
import ScaleIcon from "./icons/ScaleIcon";
import ScalePencilIcon from "./icons/ScalePencilIcon";
import SelectBoxIcon from "./icons/SelectBoxIcon";
import TagIcon from "./icons/TagIcon";
import TextBoxIcon from "./icons/TextBoxIcon";

function Home() {
  return (
    <>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <ColorPotIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <LeftArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <LeftCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <MagnetIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <MenuIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <PenIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <MinusIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <PlusIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <RightArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <RightCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <ScaleIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <ScalePencilIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <SelectBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <TagIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <TextBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={() => {
          alert("Click executes fuction from backend");
        }}
      >
        <UpLeftCursorIcon color={""} />
      </TestButton>
      <Dropmenu />
    </>
  );
}

export default Home;
