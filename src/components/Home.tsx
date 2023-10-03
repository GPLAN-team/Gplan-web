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
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ColorPotIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MagnetIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MenuIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PenIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MinusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PlusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScaleIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScalePencilIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <SelectBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TagIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TextBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <UpLeftCursorIcon color={""} />
      </TestButton>
      <Dropmenu />
    </>
  );
}

export default Home;
