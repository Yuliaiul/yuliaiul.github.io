var app = {

  createElement: function(parametr) {
    var element = document.createElement(parametr.tagName);

    if (parametr.inputType){
      element.setAttribute('type', parametr.inputType);
    }

    if (parametr.className){
      element.className = parametr.className;
    }

    if (parametr.content){
      element.innerHTML = parametr.content;
    }

    if (parametr.parentElement){
      parametr.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

  for (var i = 0; i < questionsAmount; i++) {

    this.createElement({
      tagName: 'h3',
      content: 'Вопрос №' + (i + 1),
      parentElement: form
    });

    var ul = this.createElement({
      tagName: 'ul',
      parentElement: form
    });

    for (var j = 0; j < answersAmount; j++) {

     var li = this.createElement({
      tagName: 'li',
      parentElement: ul
    });

     var label = this.createElement({
      tagName: 'label',
      content: 'Вариант ответа №' + (j + 1),
      parentElement: li
    });

     var checkbox = this.createElement({
      tagName: 'input',
      inputType: 'checkbox'
    });

     label.insertAdjacentElement('afterBegin', checkbox);
   }
 }
}
};


var wrapper = app.createElement({
 tagName: 'div',
 parentElement: document.body,
 className: 'wrapper'
});

app.createElement ({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: wrapper
});

var form = app.createElement({
  tagName: 'form',
  parentElement: wrapper
});

app.generateQuestions(3, 3);

app.createElement ({
  tagName: 'input',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  className: 'btn btn-primary',
  parentElement: form
});