import AppBar from "../../components/AppBar/AppBar";
import CardList from "../../components/CardList/CardList";
import { Container } from "../../components/common";
import { Card } from "../../types";
import styled from "styled-components";

type CardListPageProps = {
  cards: Card[];
};

const CardListPage = ({ cards }: CardListPageProps) => {
  return (
    <Container>
      <AppBar title="보유카드" />
      <CardList cards={cards} />
      {!cards.length && <HelperText>새로운 카드 등록하기👆</HelperText>}
    </Container>
  );
};

const HelperText = styled.span`
  font-size: 12px;
`;

export default CardListPage;
