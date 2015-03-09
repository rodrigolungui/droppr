(function(global, d) {
  'use strict';

  var Selectr = function(params) {
    if (!params) throw 'You need to pass a few parameters!';
    if (! ('id' in params)) throw 'You need to pass a \'id\' parameter to find select!';
    if (! ('itens' in params)) throw 'You need to pass a \'itens\' parameter to find select itens!';
    if (! ('onChange' in params)) throw 'You need to pass a \'onChange\' function parameter!';
    if ((typeof params.onChange !== 'function')) throw 'onChange callback need be a function!';
    if (! d.querySelector(params.id)) throw 'Select not matched!';

    this.process(params);
  };

  Selectr.prototype.process = function(params) {
    var select = d.querySelector(params.id),
        listItem,
        onChangeHandler;

    listItem = select.querySelectorAll(params.itens);
    onChangeHandler = function(e) {
      if (!/selected/g.test(this.className))
        params.onChange.call(this);
      e.preventDefault();
    };

    for (var i = 0; i <  listItem.length; i++) {
      var item = listItem[i];
      item.addEventListener('click', onChangeHandler);
      item.addEventListener('touchend', onChangeHandler);
    }
  };

  global.Selectr = function(params) {
     new Selectr(params);
  };
})(window, document);