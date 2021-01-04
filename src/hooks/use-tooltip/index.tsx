import { useState } from 'react';

export const useTooltip = () => {
  const [idTooltip, setIdTooltip] = useState<string>('');
  const [mouseEventType, setMouseEventType] = useState<string>('');

  const toggleModal = (mouseEventType: string, tooltipId: string): void => {
    setMouseEventType(mouseEventType);
    setIdTooltip(tooltipId);
  };

  return {
    idTooltip,
    mouseEventType,
    toggleModal,
  };
};
