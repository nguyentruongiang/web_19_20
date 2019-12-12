import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelProssingService {

  constructor() { }

  getListUser(data:any){
    
    const wb: XLSX.WorkBook = XLSX.read(data, {type: 'binary'});
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    let dta = XLSX.utils.sheet_to_json(ws, {header: 1})
    
    console.log(dta)
    return dta
  }
  
}
