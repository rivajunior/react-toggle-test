import { useState, useCallback } from "react";

import Toggle from "./Toggle";

import { DEFAULT_INITIAL_STATE } from "./constants";

export function App() {
  const [isGeneralSwitchChecked, setGeneralSwitchChecked] = useState(
    DEFAULT_INITIAL_STATE
  );

  const handleGeneralSwitchChange = useCallback(() => {
    setGeneralSwitchChecked(!isGeneralSwitchChecked);
  }, [isGeneralSwitchChecked]);

  return (
    <>
      <Toggle
        customTitle="General Switch Controller"
        isChecked={isGeneralSwitchChecked}
        onChange={handleGeneralSwitchChange}
      />
      <Toggle isChecked={isGeneralSwitchChecked} />
      <Toggle isChecked={isGeneralSwitchChecked} />
    </>
  );
}
