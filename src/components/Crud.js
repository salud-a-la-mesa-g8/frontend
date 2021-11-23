import React, {useState} from 'react';
import MaterialTable from "material-table";
import axios from "axios";
//import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import {cardPasos} from "./ArmaTuHuerta";
import {cardMantenimiento} from "./ArmaTuHuerta"

function App(){

    const[data, setData] =useState(cardPasos);
    

    const columnasPasos =[
        {
            title: "Titulo",
            field: "titulo"
        },
        {
            title: "Sub-titulo",
            field: "subtitulo"
        },
        {
            title: "Descripción",
            field: "descripcion"
        },
        {
            title: "Descripción Items",
            field: "descripcionItems"
        }
    ];
    const columnasMantenimiento =[
        {
            title: "Titulo",
            field: "titulo"
        },
        {
            title: "Sub-titulo",
            field: "subtitulo"
        },
        {
            title: "Descripción",
            field: "descripcion"
        },
        {
            title: "Descripción",
            field: "descripcion2"
        },
        
    ];
    
    return(

        <div>
            <MaterialTable 
            columns={columnasPasos }
            data={data}
            title= "Pasos para crear tu huerta"
            editable= {{
                onRowAdd:(newRow)=> new Promise((resolve, reject)=>{
                    const updatedRows =[...data, newRow]
                    setData(updatedRows)
                    resolve()
                    console.log(newRow)
                   // cardPasos([...cardPasos, newRow])
                    //
                })
            }}
            actions= {[
                {
                    icon: 'edit',
                    tooltip: "Editar",
                    onClick:(event, rowData)=> alert("¿Deseas editar el apartado: "+ rowData.titulo +"?")
                },
                {
                    icon: 'delete',
                    tooltip: "Eliminar",
                    onClick:(event, rowData)=> window.confirm("¿Estás seguro que deseas eliminaar eliminar el apartado: "+ rowData.titulo + "?")
                }
            ]}
            options={{
                actionsColumnIndex:-1, addRowPosition:"first"
            }}
            localization={{
                header:{
                    actions:"Acciones"
                }
            }}
            />
            <MaterialTable 
            columns={columnasMantenimiento}
            data={cardMantenimiento}
            title= "Mantenimiento y cuidado"
            editable= {{
                onRowAdd:(newRow)=> new Promise((resolve, reject)=>{
                })
            }}
            actions={[
                {
                    icon: "edit",
                    tooltip: "Editar",
                    onClick:(event, rowData)=> alert("¿Deseas editar el apartado: "+ rowData.titulo+ "?")
                },
                {
                    icon: 'delete',
                    tooltip: "Eliminar",
                    onClick:(event, rowData)=> window.confirm("¿Estás seguro que deseas eliminaar eliminar el apartado: "+ rowData.titulo + "?")
                }
            ]}
            options={{
                actionsColumnIndex:-1
            }}
            />
        </div>
    );
}
export default App;