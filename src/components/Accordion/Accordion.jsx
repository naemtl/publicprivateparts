import React, { useLayoutEffect, useRef, useState } from "react";

import "./Accordion.scss";

let instanceCount = 0;

const AccordionItem = ({ id, header, content, isOpen, instanceId, onToggle }) => {
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (innerRef.current) {
      setHeight(innerRef.current.scrollHeight);
    }
  }, [content, isOpen]);

  const headerId = `accordion-header-${instanceId}-${id}`;
  const panelId = `accordion-panel-${instanceId}-${id}`;

  return (
    <div
      className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}
    >
      <button
        type="button"
        id={headerId}
        className="accordion__header"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(id)}
      >
        <span className="accordion__header-text">{header}</span>
        <span className="accordion__icon" aria-hidden="true">
          <span className="accordion__icon-bar" />
          <span className="accordion__icon-bar" />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="accordion__panel"
        style={{ maxHeight: isOpen ? `${height}px` : 0 }}
      >
        <div className="accordion__panel-inner" ref={innerRef}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultOpenId = null }) => {
  const instanceId = useRef(++instanceCount).current;
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <div className="accordion">
      {items.map(({ id, header, content }) => (
        <AccordionItem
          key={id}
          id={id}
          header={header}
          content={content}
          isOpen={id === openId}
          instanceId={instanceId}
          onToggle={toggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
