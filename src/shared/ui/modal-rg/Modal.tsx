import React from "react";
import type { ModalProps } from "./types";

import "./Modal.css";

const Modal: React.FC<ModalProps> = React.memo((props) => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  const rootClasses = {
    wrapper: ["modal-wrapper"],
    container: ["modal-container"],
  };

  if (props.active) {
    rootClasses.wrapper.push("modal-wrapper__active");
    rootClasses.container.push("modal-container__active");
  }

  const clickOutside = (e: MouseEvent) => {
      if (rootRef.current && (e.target as Node).contains(rootRef.current) && props.handleClose) {
        props.handleClose();
      }
    };

  React.useEffect(() => {
    if (!rootRef.current) return;

    const node = rootRef.current;

    node.addEventListener("click", clickOutside);

    return () => {
    node.removeEventListener("click", clickOutside);
    };
  }, []);


  return (
    <div ref={rootRef} className={rootClasses.wrapper.join(" ")}>
      <div
        style={props.width ? { width: props.width } : {}}
        className={rootClasses.container.join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
});

Modal.displayName = "Modal";

export { Modal };

//example

// const [modal, setModal] = useState(false)

{/* <Modal
active={modal}
handleClose={() => setModal(prev => !prev)}
closeHeader={true}
handleCancel={() => setModal(prev => !prev)}
title='title'
width={'40%'}
>
  <div>Content</div>
  <button>OK</button>
  <button>Cancel</button>
</Modal> */}
