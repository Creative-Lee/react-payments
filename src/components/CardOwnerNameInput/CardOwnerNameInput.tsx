import styled from "styled-components";
import { InputContainer, Input, Label } from "../@common";
import { isAlphabetic } from "../../validator/Validator";
import useCardRegistrationInfoContext from "../../hooks/useCardRegistrationInfoContext";

const MAX_NAME_LENGTH = 30;

const CardOwnerNameInput = () => {
  const { ownerName, setOwnerName } = useCardRegistrationInfoContext();

  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (!isAlphabetic(name)) return;

    setOwnerName(name);
  };

  return (
    <Label>
      <Div>
        <span>카드 소유자 이름</span>
        <span>
          {ownerName.length} / {MAX_NAME_LENGTH}
        </span>
      </Div>
      <InputContainer width="318px">
        <Input
          value={ownerName}
          width="100%"
          textAlign="left"
          placeholder="카드에 표시된 영문 이름을 입력하세요."
          type="text"
          maxLength={MAX_NAME_LENGTH}
          autoComplete="cc-name"
          onChange={handleOwnerName}
        />
      </InputContainer>
    </Label>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;
