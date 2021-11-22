import React, { useState } from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import { AddBox, Edit, DeleteOutline, Check, Clear, Search } from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
}

const noticiasSalud = [
  {
    titulo: 'Titulo NOticia 1',
    minitexto: `Este el minitexto de la Noticia 1.GusHer Este el minitexto de la Noticia 1.Este el minitexto de la Noticia 1.`,
    textolargo: `Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.Este el texto largo de la Noticia 1.`
  },
  {
    titulo: 'Titulo NOticia 2',
    minitexto: 'Este el minitexto de la Noticia 2.Este el minitexto de la Noticia 2.Este el minitexto de la Noticia 2.',
    textolargo: `Este el texto largo de la Noticia.Este el texto largo de la Noticia.Este el texto largo de la Noticia. Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .`
  },
  {
    titulo: 'Titulo NOticia 3',
    minitexto: 'Este el minitexto de la Noticia 3.Este el minitexto de la Noticia 3.Este el minitexto de la Noticia 3.',
    textolargo: `Este el texto largo de la Noticia.Este el texto largo de la Noticia.Este el texto largo de la Noticia. Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .Este el texto largo de la Noticia .`
  }
]

function App() {

  const [tableData, setTableData] = useState(noticiasSalud)

  const columnas = [
    {
      title: 'TITULO',
      field: 'titulo',
    },
    {
      title: 'TEXTO CORTO',
      field: 'minitexto',
    },
    {
      title: 'TEXTO LARGO',
      field: 'textolargo',
    },
  ]

  return (
    <div >
      <MaterialTable
        icons={tableIcons}
        columns={columnas}
        data={tableData}
        title="Formulario de Administración de Noticias"
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...tableData, newRow]
            setTimeout(() => {
              setTableData(updatedRows)
              resolve()
            }, 1000)

          }),

          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {

            const updatedRows = [...tableData]
            const index = oldRow.tableData.id;
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setTableData(updatedRows)
              resolve()
            }, 1000)
          }),

          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedRows = [...tableData]
            const index = selectedRow.tableData.id;
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setTableData(updatedRows)
              resolve()
            }, 1000)
          })

        }}

        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          rowStyle: { background: '#C0C0C0' }
        }}
        localization={{
          header: {
            actions: 'Acciones'
          },
          toolbar: {
            searchPlaceholder: 'Buscar',
            searchTooltip: 'Buscar',
          },
          pagination: {
            firstAriaLabel: 'Primera página',
            firstTooltip: 'Primera página',
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsPerPage: 'Filas por página:',
            labelRowsSelect: 'filas',
            lastAriaLabel: 'Ultima página',
            lastTooltip: 'Ultima página',
            nextAriaLabel: 'Pagina siguiente',
            nextTooltip: 'Pagina siguiente',
            previousAriaLabel: 'Pagina anterior',
            previousTooltip: 'Pagina anterior',
          },
          body: {
            emptyDataSourceMessage: 'No hay datos por mostrar',
            addTooltip: 'Añadir',
            deleteTooltip: 'Eliminar',
            editTooltip: 'Editar',
            filterRow: {
              filterTooltip: 'Filtrar',
            },
            editRow: {
              deleteText: '¿Segura(o) que quiere eliminar?',
              cancelTooltip: 'Cancelar',
              saveTooltip: 'Guardar',
            }
          }
        }}
      />
    </div>
  );
}

export default App;
