import View from './View.js';
import icons from 'url:../../img/icons.svg';
import PreviewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _generateMarkup() {
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}
export default new ResultsView();
