import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardNumberInput from "./CardNumberInput";
import { CardNumber, CardNumberGroups } from "../../types";

const meta: Meta<typeof CardNumberInput> = {
  title: "CardNumberInput",
  component: CardNumberInput,

  args: {
    cardNumber: {
      firstGroup: "",
      secondGroup: "",
      thirdGroup: "",
      fourthGroup: "",
    },
  },

  argTypes: {
    cardNumber: {
      description: "카드 번호 상태입니다.",
    },

    onChange: {
      description: "카드 번호 상태 변경 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardNumberInput>;

const CardNumberInputwithHooks = () => {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  });

  const handleCardNumber = (value: string, targetGroup: CardNumberGroups) => {
    setCardNumber({ ...cardNumber, [targetGroup]: value });
  };

  return <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumber} />;
};

export const Default: Story = {
  render: () => {
    return <CardNumberInputwithHooks />;
  },
};
