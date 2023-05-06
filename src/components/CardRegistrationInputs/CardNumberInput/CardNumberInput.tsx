import { CardNumberGroups } from "../../types";
import { isNumeric } from "../../validator/Validator";
import { InputContainer, Input, Label, RequiredInputIcon } from "../@common";
import requiredInputIcon from "../../assets/requiredInputIcon.png";
import useCardRegistrationInfoContext from "../../hooks/useCardRegistrationInfoContext";

const CardNumberInput = () => {
  const { cardNumber, setCardNumber } = useCardRegistrationInfoContext();
  const { firstGroup, secondGroup, thirdGroup, fourthGroup } = cardNumber;

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const targetGroup = e.target.name;

    if (!isNumeric(value)) return;
    if (!isCardNumberGroupsType(targetGroup)) return;

    setCardNumber(value, targetGroup);
  };

  const isCardNumberGroupsType = (targetGroup: string): targetGroup is CardNumberGroups => {
    return targetGroup in cardNumber;
  };

  return (
    <Label>
      카드번호
      <RequiredInputIcon src={requiredInputIcon} />
      <InputContainer width="318px">
        <Input
          value={firstGroup}
          name="firstGroup"
          placeholder="1234"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          autoFocus
          autoComplete="cc-number"
          onChange={handleCardNumber}
        />
        <span>-</span>
        <Input
          value={secondGroup}
          name="secondGroup"
          placeholder="1234"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="text"
          minLength={4}
          maxLength={4}
          required
          autoComplete="cc-number"
          onChange={handleCardNumber}
        />
        <span>-</span>
        <Input
          value={thirdGroup}
          name="thirdGroup"
          placeholder="1234"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          autoComplete="cc-number"
          onChange={handleCardNumber}
        />
        <span>-</span>
        <Input
          value={fourthGroup}
          name="fourthGroup"
          placeholder="1234"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          type="password"
          minLength={4}
          maxLength={4}
          required
          autoComplete="cc-number"
          onChange={handleCardNumber}
        />
      </InputContainer>
    </Label>
  );
};

export default CardNumberInput;
