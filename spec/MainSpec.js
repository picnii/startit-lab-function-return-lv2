describe("Function Return lv2", function() {
  var cmds;
  

  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    cmds = getCommands();
  })

 

  it('have input with  3 button ', function(){
    expect($('#buttonA').length).toBe(1);
    expect($('#buttonB').length).toBe(1);
    expect($('#buttonC').length).toBe(1);
  });

  it('sumAll(a,b) should return what a + a+1 + ... + b = ?', function(){
    
    for(var i =0; i < 50; i++)
    {
      for(var j =i + 1; j< i + 50; j++)
      {
        var expected = sumAll(i,j);
        var actual = (i + j) * ( j - i + 1) / 2;
        expect(expected).toBe(actual);
      }
    }
    
  });

  it('special should return Sqrt(a^ 2 + b^2) + sumAll(a, b)', function(){
    for(var i =0; i < 50; i++)
    {
      for(var j =i+1; j < i + 10; j++)
      {
        var expected = special(i,j);
        var actual = Math.sqrt((Math.pow(i,2) + Math.pow(j,2)) / 2) + sumAll(i, j);
        expect(expected).toBe(actual)
      }
    }
  });

  it('button A give 2 prompt then sumAll', function(){
    window.testPrompCount = 0;
    window.testPrompReturn = ["1","100","1","10","-10","10","-10","20"]
    window.prompt = function()
    {
      var answer = window.testPrompReturn[testPrompCount];
      testPrompCount++;
      return answer;
    }

    onSubmitA();
    expect($('#item0').html()).toBe('5050');

    onSubmitA();
    expect($('#item1').html()).toBe('55');

    onSubmitA();
    expect($('#item2').html()).toBe('0');

    onSubmitA();
    expect($('#item3').html()).toBe('155');    

  });

  it('button B give 2 prompt then sumAll 1 .5', function(){
    window.testPrompCount = 0;
    window.testPrompReturn = ["1","100","1","10","-10","10","-10","20"]
    window.prompt = function()
    {
      var answer = window.testPrompReturn[testPrompCount];
      testPrompCount++;
      return answer;
    }

    onSubmitB();
    expect($('#item0').html()).toBe('6325');

    onSubmitB();
    expect($('#item1').html()).toBe('70');

    onSubmitB();
    expect($('#item2').html()).toBe('-40');

    onSubmitB();
    expect($('#item3').html()).toBe('155'); 

  });

  it('button C give 2 prompt then special', function(){
    
window.testPrompCount = 0;
    window.testPrompReturn = ["1","100","1","10","-10","10","-10","20"]
    window.prompt = function()
    {
      var answer = window.testPrompReturn[testPrompCount];
      testPrompCount++;
      return answer;
    }

    onSubmitC();
    expect($('#item0').html()).toBe('5120.714213564177');

    onSubmitC();
    expect($('#item1').html()).toBe('62.10633520177595');

    onSubmitC();
    expect($('#item2').html()).toBe('10');

    onSubmitC();
    expect($('#item3').html()).toBe('170.81138830084188'); 
  });
  
});