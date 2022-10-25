import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2022-10-24T01:00"),
      fim: new Date("2022-10-24T05:00"),
      completo: false,
      id: 1642342744
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2022-10-24T07:00"),
      fim: new Date("2022-10-24T10:00"),
      completo: false,
      id: 1642342955
    },
  ]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})
