import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import type { FC, ReactElement, MouseEvent, ReactNode } from "react";
import Avatar from "@mui/material/Avatar";

interface MouseOverPopoverProps {
  readonly pngPath: string;
  readonly children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const MouseOverPopover: FC<MouseOverPopoverProps> = ({
  pngPath,
  children,
}: MouseOverPopoverProps): ReactElement | null => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        src={pngPath}
        variant="square"
        aria-owns={anchorEl ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{children}</Typography>
      </Popover>
    </div>
  );
};

export default MouseOverPopover;
