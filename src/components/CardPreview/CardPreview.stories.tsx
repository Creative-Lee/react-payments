import GlobalStyle from "../../styled/GlobalStyle";
import CardPreview from "./CardPreview";

export default {
  title: "CardPreview",
  component: CardPreview,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardPreview
      card={{
        number: {
          firstGroup: "1234",
          secondGroup: "1234",
          thirdGroup: "1234",
          fourthGroup: "1234",
        },

        expirationDate: {
          month: "12",
          year: "12",
        },

        ownerName: "aaa",
        securityCode: "111",
        password: "12",
      }}
    ></CardPreview>
  </>
);
