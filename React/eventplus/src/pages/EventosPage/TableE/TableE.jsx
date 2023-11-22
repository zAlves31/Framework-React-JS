import React from "react";
import "./TableE.css"
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

const TableE = ({ dados, fnDelete = null, fnUpdate = null }) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Nome
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo de Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descricao
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map(ev => {
            return(
                <tr className="table-data__head-row" key={ev.idEvento}>
                    <td className="table-data__data table-data__data--big">
                        {ev.Nome}
                    </td>
                    <td className="table-data__data table-data__data--big">
                        {ev.tipoEvento}
                    </td>
                    <td className="table-data__data table-data__data--big">
                        {ev.descricao}
                    </td>
                    <td className="table-data__data table-data__data--big">
                        {ev.data}
                    </td>

                    <td className="table-data__data table-data__data--little">
                        <img src={editPen} alt="" className="table-data__icon" onClick={() => fnUpdate(ev.idTipoEvento)}/>
                    </td>
                    <td className="table-data__data table-data__data--little">
                        <img src={trashDelete} alt="" className="table-data__icon" onClick={() => fnDelete(ev.idTipoEvento, ev.titulo)}/>
                    </td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
};

export default TableE;
