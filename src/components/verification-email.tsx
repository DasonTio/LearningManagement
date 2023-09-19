import * as React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";

interface VerificationEmailProps {
  user_id: string;
  verification_code: string;
}

export const VerificationEmail: React.FC<Readonly<VerificationEmailProps>> = ({
  user_id,
  verification_code,
}) => (
  <Html lang="en" dir="ltr">
    <h1>Verification Mail</h1>
    <p>Click this button to verify your email in Adita Learning System</p>
    <Button
      href={`https://localhost:3000/api/register?id=${user_id}&c=${verification_code}`}
    >
      Click Here
    </Button>
  </Html>
);
