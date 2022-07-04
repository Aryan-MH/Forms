import { Component, OnInit } from '@angular/core';
import {ngxCsv } from 'ngx-csv/ngx-csv';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdfconverter',
  templateUrl: './pdfconverter.component.html',
  styleUrls: ['./pdfconverter.component.css']
})
export class PdfconverterComponent implements OnInit {

  data = [{
    name: "Test 1",
    age: 15,
    average: 9.1,
    description: "No description"
  },
  {
    name: "Test 2",
    age: 18,
    average: 8.5,
    description: "No Description"
  },
  {
    name: "Test 3",
    age: 16,
    average: 7.8,
    description: "No Description"
  }
  

  ]
  public convertToPDF(){
    html2canvas(document.body).then(canvas=>{
      const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); 
  var width = pdf.internal.pageSize.getWidth();
  var height = canvas.height * width / canvas.width;
  pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  pdf.save('data.pdf'); 
  });
    }
    filedownload(){
      let options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'USF Load Report',
        useBom: true,
        noDownload: false,
        headers: ["Name", "Age", "Average","Approved","Description"]
      };
     
      new ngxCsv(this.data, "Load Data", options);
      //Load Data is file name what we download
    }
  constructor() { }

  ngOnInit(): void {
  }

}
