import { Header } from "../Header";
import { WrapperLayout } from "./styled";

export function Layout({ children }) {
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  );
}
