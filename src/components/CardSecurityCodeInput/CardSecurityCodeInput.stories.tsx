import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardSecurityCodeInput from "./CardSecurityCodeInput";

import type { Card } from "../../types";

const meta: Meta<typeof CardSecurityCodeInput> = {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
  argTypes: {
    securityCode: {
      description: "보안 코드 상태입니다.",
    },

    onChange: {
      description: "보안 코드 상태 변경 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardSecurityCodeInput>;

const CardSecurityCodeInputwithHooks = () => {
  const [securityCode, setSecurityCode] = useState<Card["securityCode"]>("");

  const handleSecurityCode = (code: string) => {
    setSecurityCode(code);
  };

  return <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCode} />;
};

export const Default: Story = {
  render: () => {
    return <CardSecurityCodeInputwithHooks />;
  },
};
