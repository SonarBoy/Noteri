import { Component, OnInit } from '@angular/core';
import { createWorker } from 'tesseract.js';

// DAN CARLIN 28 Prophets of Doom.
@Component({
  selector: 'app-tesseract-test',
  templateUrl: './tesseract-test.component.html',
  styleUrls: ['./tesseract-test.component.css']
})
export class TesseractTestComponent implements OnInit {

  title = 'tesseract.js-angular-app';
  ocrResult = 'Recognizing...';

  constructor() {
    this.doOCR();
  }

  ngOnInit() {

   
  }

  async doOCR(){
    const worker = createWorker({
      logger: m => console.log(m),
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data: {text}} = await worker.recognize('../assets/Tester1.jpg');

    console.log(text);
    this.ocrResult = text;
    await worker.terminate();
    
  }

}
