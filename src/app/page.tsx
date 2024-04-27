import { Cards, Header, Navbar } from "@/layout";
import bgImage from "../../public/bgImage.png";

export default function Home() {
  return (
    <main>
      <Header bgImage={bgImage}>
        <Navbar />
      </Header>
      <Cards />
    </main>
  );
}
