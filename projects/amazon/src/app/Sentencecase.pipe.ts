import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'sentencecase',
})
export class SentenceCasePipe implements PipeTransform {
  transform(str: string) {
    let firstChar = str.charAt(0);
    let restChars = str.substring(1);
    let sentence = firstChar.toUpperCase() + restChars.toLowerCase();
    return sentence;
  }
}
