var { Component, Ellipse } = scene

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
        image: '../images/forklift.png'
        // image: '../images/' + imageNumber + '.png'
      }
      this.drawFill(context)
    }
  }

  get controls(){}
}

Component.register('forklift', Forklift)