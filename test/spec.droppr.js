describe('Droppr', function() {
  var Droppr = window.Droppr;

  describe('instance', function() {
    it('should be in window', function() {
      expect('Droppr' in window).toBeTruthy();
    });

    it('should be a function', function() {
      isFunction = Droppr instanceof Function;
      expect(isFunction).toBeTruthy();
    });
  });

  describe('exceptions', function() {
    beforeEach(function(){
      jasmine.getFixtures().set(window.__html__['test/fixtures/droppr.html']);
    });

    it('should throw exception if do not pass params', function(){
      expect(function(){
        window.Droppr();
      }).toThrow('You need to pass a few parameters!');
    });

    it('should throw exception if do not pass a valid param', function(){
      expect(function(){
        window.Droppr({});
      }).toThrow('You need to pass a \'id\' parameter to find select!');
    });

    it('should throw exception if do not pass id, itens and onChange in object param', function(){
      expect(function(){
        window.Droppr({
          'id': '#select'
        });
      }).toThrow('You need to pass a \'itens\' parameter to find select itens!');

      expect(function(){
        window.Droppr({
          'itens': 'ul li',
          'onChange': null
        });
      }).toThrow('You need to pass a \'id\' parameter to find select!');

      expect(function(){
        window.Droppr({
          'id': '#select',
          'itens': 'ul li'
        });
      }).toThrow('You need to pass a \'onChange\' function parameter!');

      expect(function(){
        window.Droppr({
          'id': '#select',
          'itens': 'ul li',
          'onChange': undefined
        });
      }).toThrow('onChange callback need be a function!');

      expect(function(){
        window.Droppr({
          'id': '#select',
          'itens': 'ul li',
          'onChange': function() {
            return false;
          }
        });
      }).not.toThrow();

      expect(function(){
        window.Droppr({
          'id': '#selectnotexists',
          'itens': 'ul li',
          'onChange': function() {
            return false;
          }
        });
      }).toThrow('Select not matched!');
    });
    
    afterEach(function(){
      jasmine.getFixtures().clearCache();
      jasmine.getFixtures().cleanUp();
    });
  });

  describe('onChange handler', function(){
    beforeEach(function(){
      var self = this;

      jasmine.getFixtures().set(window.__html__['test/fixtures/droppr.html']);

      this.select = $('#select');
      this.called = false;

      this.callback_test = function(){
        self.called = true;
      };

      window.Droppr({
        'id': '#select',
        'itens': 'ul li',
        'onChange': this.callback_test
      });
    });

    it('should be run callback test if a new option is selected', function(){
      var element = this.select.find('li:first-child')[0];
      effroi.mouse.click(element);

      expect(this.called).toBeTruthy();
    });

    it('should not be execute callback test if option is selected', function(){
      var element = this.select.find('li:first-child')[0];
      element.className = 'selected';
      effroi.mouse.click(element);
      expect(this.called).not.toBeTruthy();
    });

    afterEach(function(){
      jasmine.getFixtures().clearCache();
      jasmine.getFixtures().cleanUp();
    });
  });
});
