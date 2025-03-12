// source: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react';

import AccordionPanel from './AccordionPanel'

export default function Accordion({ panelData }) {
  const [expandedPanel, setExpandedPanel] = useState(1);

  return (
    <div>
      {panelData.map((panel, index) => (
        <AccordionPanel
          key={index}
          title={panel.title}
          isExpanded={expandedPanel === index}
          onExpand={() => setExpandedPanel(index)}
        >
          {panel.content}
        </AccordionPanel>
      ))}
    </div>
  );
}
