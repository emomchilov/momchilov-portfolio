import HomePageGraphic from "../assets/img/home-page-graphic";
import { Header } from "../components/header/Header";
import { Title } from "../components/shared/Title";
import { NavButtons } from "../components/about/NavButtons";

export function About() {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2">
        <div className="flex bg-spotted p-20 place-content-center">
          <HomePageGraphic className="md:scale-125"></HomePageGraphic>
        </div>
        <div className="flex flex-col bg-blue-dark items-center px-28 place-content-center">
          <div className="items-start">
            <Title
              title="hi, i'm eden."
              subtitle="let's get to know each other"
            ></Title>
            <NavButtons></NavButtons>
          </div>
        </div>
      </div>
    </>
  );
}
