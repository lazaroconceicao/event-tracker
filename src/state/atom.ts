import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2022-10-21T01:00"),
      fim: new Date("2022-10-21T05:00"),
      completo: false,
      id: 1642342744
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2022-10-21T07:00"),
      fim: new Date("2022-10-21T10:00"),
      completo: false,
      id: 1642342955
    },
    {
      descricao: "Tocar Pagode",
      inicio: new Date("2022-10-21T13:00"),
      fim: new Date("2022-10-21T16:00"),
      completo: false,
      id: 1642342858
    },
  ]
})
