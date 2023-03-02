import { HomePageGraphic } from "../../assets/img/home-page-graphic"
import { Header } from "../Header/Header"
import { Title } from "../shared/Title"
import { NavButtons } from "./NavButtons"

export function About() {
  return (
    <>
    <Header></Header>
    <div className="grid grid-cols-2">
      <div className="flex bg-spotted p-20 place-content-center">
        <HomePageGraphic></HomePageGraphic>
      </div>
      <div className="flex flex-col bg-blue-dark items-center place-content-center">
        <Title className="py-10"></Title>
        <NavButtons></NavButtons>
      </div>
    </div>
    </>
  )
}