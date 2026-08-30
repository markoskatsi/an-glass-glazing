import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import { IoMdReturnRight } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Icon.scss";

export const Icon = ({ children }: { children: React.ReactNode }) => {
  return <div className="icon">{children}</div>;
};

function Call() {
  return <IoCallOutline size={19} />;
}

function Mail() {
  return <CiMail size={19} />;
}

function Location() {
  return <IoLocationOutline size={19} />;
}

function ArrowRight() {
  return <FaHandPointRight size={19} />;
}

function ReturnLeft() {
  return <IoMdReturnLeft size={19} />;
}

function ReturnRight() {
  return <IoMdReturnRight size={19} />;
}

function Tick() {
  return <FaCheck size={19} />;
}

function Cross() {
  return <FaTimes size={19} />;
}

Icon.Call = Call;
Icon.Mail = Mail;
Icon.Location = Location;
Icon.ArrowRight = ArrowRight;
Icon.ReturnLeft = ReturnLeft;
Icon.ReturnRight = ReturnRight;
Icon.Tick = Tick;
Icon.Cross = Cross;
