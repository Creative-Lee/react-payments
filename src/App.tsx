import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import CardListPage from "./pages/CardListPage/CardListPage";
import CardAliasRegistrationPage from "./pages/CardAliasRegistrationPage/CardAliasRegistrationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import useStateWithStorage from "./hooks/useStateWithStorage";
import ROUTE_PATH from "./constants/routePath";
import { CARDS_KEY } from "./constants/storageKey";
import type { Card } from "./types";
import { CardRegistrationInfoProvider } from "./context/CardRegistrationInfoContext";
import { ModalProvider } from "./context/ModalContext";

function App() {
  const { storageValue: cards, setStorageValue: setCards } = useStateWithStorage<Card[]>(CARDS_KEY, []);

  const addCard = (card: Card) => {
    const updatedCards = [...cards, card];

    setCards(updatedCards);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index path={ROUTE_PATH.root} element={<CardListPage cards={cards} />} />
          <Route
            path={ROUTE_PATH.addCard}
            element={
              <ModalProvider defaultOpen>
                <CardRegistrationInfoProvider>
                  <AddCardPage />
                </CardRegistrationInfoProvider>
              </ModalProvider>
            }
          />
          <Route path={ROUTE_PATH.cardAlias} element={<CardAliasRegistrationPage onSubmit={addCard} />} />
          <Route path={ROUTE_PATH.other} element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #eeeeee;
`;

export default App;
