var { Component, Ellipse } = scene

var getCurrentScript = function () {
  if (document.currentScript) {
    return document.currentScript.src;
  } else {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length-1].src;

  }
};

var getCurrentScriptPath = function () {
  var script = getCurrentScript();
  var path = script.substring(0, script.lastIndexOf('/'));
  return path;
};

export default class Forklift extends Ellipse {

  _draw(context) {
    var {
      imageNumber = 1,
      hidden = false,
      fillStyle = '#389fdb',
      cx,
      cy,
      rx,
      ry
    } = this.model;

    if(!hidden){

      context.beginPath()
      context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
      context.fillStyle = '#389fdb'
      context.fill()

      context.beginPath()
      context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)

      this.model.fillStyle = {
        type: 'pattern',
        fitPattern: true,
//        image: '../images/' + imageNumber + '.png'
        image: `${getCurrentScriptPath()}images/${imageNumber}.png`
      }
      this.drawFill(context)
    }
  }

  get controls(){}
}

Component.register('forklift', Forklift)