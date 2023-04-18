import { InputContainer, Input, Label } from "../common";

const CardOwnerNameInput = () => {
  return (
    <Label>
      카드 소유자 이름(선택)
      <InputContainer width="318px">
        <Input
          width="100%"
          textAlign="left"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          maxLength={30}
          required
        />
      </InputContainer>
    </Label>
  );
};

export default CardOwnerNameInput;
