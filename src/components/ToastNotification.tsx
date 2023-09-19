import { Alert, DefaultMantineColor } from "@mantine/core";
import { WarningCircle } from "@phosphor-icons/react";
import clsx from "clsx";

interface ToastNotificationProps {
  icon?: JSX.Element;
  message: string;
  title: string;
  shown: boolean;
  color?: DefaultMantineColor;
}

const ToastNotification = ({
  icon,
  message,
  title,
  shown,
  color,
}: ToastNotificationProps) => {
  return (
    <main
      className={clsx([
        { "-translate-y-24": !shown },
        { "translate-y-16": shown },
        "fixed ease-in-out duration-300 top-0 left-1/2 -translate-x-1/2",
      ])}
    >
      <Alert
        icon={icon ?? <WarningCircle size="2rem" />}
        title={title ?? "Error"}
        color={color ?? "red"}
        closeButtonLabel="Close Alert"
        className="font-bold"
      >
        {message}
      </Alert>
    </main>
  );
};

export default ToastNotification;
