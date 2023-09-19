import * as React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";

interface VerificationEmailProps {
  verification_code: string;
}

export const VerificationEmail: React.FC<Readonly<VerificationEmailProps>> = ({
  verification_code,
}) => (
  <Html lang="en" dir="ltr">
    <h1>Verification Mail</h1>
    <p>Click this button to verify your email in Adita Learning System</p>
    <Button
      href={`${process.env.NEXT_PUBLIC_API}/api/auth/register?c=${verification_code}`}
    >
      Click Here
    </Button>
  </Html>
);
