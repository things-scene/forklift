var { Component, Rect } = scene

export default class Forklift extends Rect {

  _draw(context) {
    var {
      imageNumber = 1,
      hidden = false,
      fillStyle,
      left,
      top,
      width,
      height
    } = this.model;

    if(!hidden){

      context.beginPath()

      context.rect(left, top, width, height)
      this.model.fillStyle = {
        type: 'pattern',
        fitPattern: true,
        image: '../images/' + imageNumber + '.png'
      }
      this.drawFill(context)
    }
  }

  get controls(){}
}
Component.register('forklift', Forklift)