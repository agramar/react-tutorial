import ReactDom from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const portalRootElement = document.getElementById("portal");
  if (!portalRootElement) {
    throw new Error("Portal root element not found!");
  }

  return ReactDom.createPortal(children, portalRootElement);
};

export default ModalPortal;
