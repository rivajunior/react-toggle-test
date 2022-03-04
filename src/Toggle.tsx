import { useCallback, useEffect, useState, memo } from "react";
import { Switch } from "@material-ui/core";

import ToggleText from "./ToggleText";

interface ToggleProps {
  customTitle?: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const Toggle = memo(
  ({
    customTitle = "Switch Component",
    isChecked = false,
    onChange
  }: ToggleProps) => {
    const [isCheckedInternal, setChecked] = useState(isChecked);

    const handleSwitchChange = useCallback(() => {
      const handler = typeof onChange === "function" ? onChange : setChecked;

      handler(!isCheckedInternal);
    }, [isCheckedInternal, onChange]);

    useEffect(() => {
      setChecked(isChecked);
    }, [isChecked]);

    return (
      <>
        <h1>{customTitle}</h1>

        <Switch checked={isCheckedInternal} onChange={handleSwitchChange} />

        {isCheckedInternal ? (
          <ToggleText color="red">On fire for the party!</ToggleText>
        ) : (
          <ToggleText color="gray">Off to sleep.</ToggleText>
        )}
      </>
    );
  }
);

export default Toggle;
