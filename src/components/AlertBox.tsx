import { Alert, DefaultMantineColor } from "@mantine/core";
import { WarningCircle } from "@phosphor-icons/react";

interface AlertBoxProps {
  icon?: JSX.Element;
  message: string;
  title: string;
  color?: DefaultMantineColor;
}

const AlertBox = ({ icon, message, title, color }: AlertBoxProps) => {
  return (
    <main className="absolute ease-in-out duration-300">
      <Alert
        icon={icon ?? <WarningCircle size="1rem" />}
        title={title ?? "Error"}
        color={color ?? "red"}
        withCloseButton
        closeButtonLabel="Close Alert"
      >
        {message}
      </Alert>
    </main>
  );
};

export default AlertBox;
