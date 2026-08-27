import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

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

Icon.Call = Call;
Icon.Mail = Mail;
Icon.Location = Location;
