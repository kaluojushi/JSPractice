export class FnApp {
  constructor(canvas, opts = {}) {
    this.fixedCount = 0;
    this.MAX_DELTA = 1e6;
    this.MIN_DELTA = 1e-6;
    this.isAnimate = false;
    this.animateDuration = 0;
    this.dpr = 1;
    this.state = {
      startPos: null,
      endPos: null,
    }
    this.fnList = [];

    this.canvas = canvas;
    this.ctx2d = canvas.getContext('2d');
    this.adaptDPR();

    this.leftX = opts.leftX || -this.halfWidth / 100;
    this.rightX = -this.leftX;
    this.xLen = this.rightX - this.leftX;
    this.leftY = this.leftX;
    this.rightY = this.rightX;
    this.yLen = this.xLen;

    this.gridCount = opts.gridCount || 10;
    this.steps = opts.steps || 1;
    this.scaleSteps = opts.scaleSteps || 0.05;
    this.fontSize = opts.fontSize || 14;
    this.animateDuration = opts.animateDuration || 0;

    this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
    document.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
    document.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
    this.canvas.addEventListener('mousewheel', this.handleMouseWheel.bind(this), false);
  }

  adaptDPR() {
    const dpr = window.devicePixelRatio;
    const {width, height} = this.canvas;
    this.dpr = dpr;
    this.width = width;
    this.height = height;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx2d?.scale(dpr, dpr);
  }

  handleMouseDown(e) {
    if (this.isAnimate) {
      return;
    }
    const canvasPos = this.viewportToCanvasPosition(e);
    this.state.startPos = canvasPos;
  }

  handleMouseMove(e) {
    if (this.isAnimate) {
      return;
    }
    const canvasPos = this.viewportToCanvasPosition(e);
    if (!this.state.startPos) {
      this.drawSubLine(canvasPos);
      return;
    }
    document.body.style.cursor = 'move';
    this.state.endPos = canvasPos;
    const {width, height, xLen, yLen, state: {startPos, endPos}} = this;
    const dx = (endPos.x - startPos.x) / width * xLen;
    const dy = (endPos.y - startPos.y) / height * yLen;
    this.leftX -= dx;
    this.rightX -= dx;
    this.leftY += dy;
    this.rightY += dy;
    this.xLen = this.rightX - this.leftX;
    this.yLen = this.rightY - this.leftY;
    this.draw();
    this.state.startPos = canvasPos;
  }

  handleMouseUp(e) {
    this.state.startPos = null;
    this.state.endPos = null;
    document.body.style.cursor = 'auto';
  }

  handleMouseWheel(e) {
    e.preventDefault();
    if (this.isAnimate) {
      return;
    }
    const event = e;
    const canvasPos = this.viewportToCanvasPosition(event);
    const {deltaY} = event;
    const {leftX, rightX, leftY, rightY, scaleSteps} = this;
    let scale;
    if (deltaY > 0) {
      scale = 1 + scaleSteps;
    } else {
      scale = 1 - scaleSteps;
    }
    if (this.isInvalidVal(scale)) {
      return;
    }
    const {x, y} = this.canvasPosToFnVal(canvasPos);
    this.leftX = x - (x - leftX) * scale;
    this.rightX = x + (rightX - x) * scale;
    this.leftY = y - (y - leftY) * scale;
    this.rightY = y + (rightY - y) * scale;
    this.xLen = this.rightX - this.leftX;
    this.yLen = this.rightY - this.leftY;
    this.draw();
  }

  viewportToCanvasPosition(e) {
    const {clientX, clientY} = e;
    const {top, left} = this.canvas.getBoundingClientRect();
    const x = clientX - top;
    const y = clientY - left;
    return {x, y};
  }

  canvasPosToFnVal(canvasPos) {
    const {width, height, leftX, leftY, xLen, yLen} = this;
    const x = leftX + canvasPos.x / width * xLen;
    const y = leftY + canvasPos.y / height * yLen;
    return {x, y};
  }

  fnValToCanvasPos(fnVal) {
    const {width, height, leftX, leftY, xLen, yLen} = this;
    const x = (fnVal.x - leftX) / xLen * width;
    const y = (fnVal.y - leftY) / yLen * height;
    return {x, y: height - y};
  }

  isInvalidVal(ratio) {
    const {xLen, yLen, MAX_DELTA, MIN_DELTA} = this;
    if (ratio > 1 && (xLen > MAX_DELTA || yLen > MAX_DELTA)) {
      return true;
    }
    if (ratio < 1 && (xLen < MIN_DELTA || yLen < MIN_DELTA)) {
      return true;
    }
    return false;
  }

  draw() {
    if (this.isAnimate) {
      return;
    }
    this.clearCanvas();
    this.drawGrid();
    this.drawFn();
  }

  drawAnimate() {
    if (this.isAnimate) {
      return;
    }
    this.clearCanvas();
    this.drawGrid();
    this.drawFnAnimate();
  }

  drawGrid() {
    const {width, height, leftX, rightX, leftY, rightY, xLen, yLen, gridCount, ctx2d} = this;
    ctx2d?.save();

    const [gridWidth, gridHeight, fixedCount] = this.calcGridSize(xLen, gridCount);
    this.fixedCount = fixedCount;

    for (let i = Math.floor(leftX / gridWidth); i * gridWidth < rightX; i++) {
      const x = (i * gridWidth - leftX) / xLen * width;
      const color = i ? '#ddd' : '#000';
      this.drawLine(x, 0, x, height, color);
      this.fillText(String(this.formatNum(i * gridWidth, this.fixedCount)), x, height, this.fontSize, "center");
    }

    for (let j = Math.floor(leftY / gridHeight); j * gridHeight < rightY; j++) {
      let y = (j * gridWidth - leftY) / yLen * height;
      y = height - y;
      const color = j ? '#ddd' : '#000';
      this.drawLine(0, y, width, y, color);
      this.fillText(String(this.formatNum(j * gridHeight, this.fixedCount)), 0, y, this.fontSize, "middle");
    }
    ctx2d?.restore();
  }

  calcGridSize(len, gridCount) {
    let gridWidth = 1;
    let fixedCount = 0;
    let unitX = len / gridCount;
    while (gridWidth < unitX) {
      gridWidth *= 10;
    }
    while (gridWidth / 10 > unitX) {
      gridWidth /= 10;
      fixedCount++;
    }
    if (gridWidth / 5 > unitX) {
      gridWidth /= 5;
      fixedCount++;
    } else if (gridWidth / 2 > unitX) {
      gridWidth /= 2;
      fixedCount++;
    }
    return [gridWidth, gridWidth, fixedCount];
  }

  drawFn() {
    const {width, height, leftX, leftY, xLen, yLen, steps, ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.save();
    this.fnList.forEach(fn => {
      ctx2d.strokeStyle = fn.color;
      ctx2d.beginPath();
      for (let i = 0; i < width; i += steps) {
        const x = i / width * xLen + leftX;
        let y = fn(x);
        if (isNaN(y)) {
          continue;
        }
        y = height - (y - leftY) / yLen * height;
        if (i === 0 || y > height || y < 0) {
          ctx2d.moveTo(i, y);
        } else {
          ctx2d.lineTo(i, y);
        }
      }
      ctx2d.stroke();
    });
    ctx2d.restore();
  }

  drawFnAnimate() {
    const {width, height, leftX, leftY, xLen, yLen, steps, ctx2d, fnList, animateDuration} = this;
    if (this.isAnimate) {
      return;
    }
    if (!ctx2d) {
      return;
    }
    ctx2d.save();

    let idx = 0;
    let i = 0;
    let self = this;

    function play() {
      if (i < 0 || i >= width || idx < 0 || idx >= fnList.length || !ctx2d) {
        self.isAnimate = false;
        return;
      }
      let fn = fnList[idx];
      const color = fn.color;
      ctx2d.beginPath();

      function playFn() {
        if (i >= width) {
          i = 0;
          idx++;
          play();
          return;
        }
        const x = i / width * xLen + leftX;
        let y = fn(x);
        if (isNaN(y)) {
          i += steps;
          playFn();
          return;
        }
        y = height - (y - leftY) / yLen * height;
        if (i === 0 || y > height || y < 0) {
          ctx2d?.moveTo(i, y);
          i += steps;
          playFn();
        } else {
          ctx2d?.lineTo(i, y);
          ctx2d.strokeStyle = color;
          ctx2d?.stroke();
          i += steps;
          setTimeout(playFn, animateDuration);
        }
      }

      setTimeout(playFn, animateDuration);
    }

    play();
    ctx2d.restore();
  }

  drawSubLine(canvasPos) {
    const ctx2d = this.ctx2d;
    if (!ctx2d) {
      return;
    }
    const {width, height} = this;
    const {x, y} = canvasPos;
    let subLineVisible = true;
    if (x <= 0 || x >= width || y <= 0 || y >= height) {
      subLineVisible = false;
    }
    this.draw();
    if (!subLineVisible) {
      return;
    }
    ctx2d.save();
    this.drawLine(x, 0, x, height, '#999', true);
    this.drawLine(0, y, width, y, '#999', true);
    ctx2d.restore();
    const centerRectLen = 8;
    this.strokeRect(x - centerRectLen / 2, y - centerRectLen / 2, centerRectLen, centerRectLen);
    const actualPos = this.canvasPosToFnVal(canvasPos);
    this.handleCrosspoint(actualPos.x);
  }

  handleCrosspoint(x) {
    const pointList = this.checkCrosspoint(x);
    pointList.forEach(point => {
      const {x, y} = this.fnValToCanvasPos(point);
      this.fillCircle(x, y, 4, 'red');
      this.fillText(`[${this.formatNum(point.x, this.fixedCount + 1)}, ${this.formatNum(point.y, this.fixedCount + 1)}]`, x, y, this.fontSize);
    });
  }

  drawLine(x1, y1, x2, y2, strokeStyle = '#000', isDashLine = false) {
    const {ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.strokeStyle = strokeStyle;
    if (isDashLine) {
      ctx2d.setLineDash([6, 6]);
    }
    ctx2d.beginPath();
    ctx2d.moveTo(x1, y1);
    ctx2d.lineTo(x2, y2);
    ctx2d.stroke();
  }

  fillText(text, x, y, fontSize = 10, textAlign = 'left') {
    const {ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.save();
    ctx2d.font = `${fontSize}px sans-serif`;
    if (textAlign === 'center') {
      const w = ctx2d.measureText(text).width;
      x -= w / 2;
    } else if (textAlign === 'middle') {
      y += fontSize / 2;
    }
    ctx2d.fillText(text, x, y);
    ctx2d.restore();
  }

  fillCircle(x, y, radius, fillStyle = '#000') {
    const {ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.save();
    ctx2d.fillStyle = fillStyle;
    ctx2d.beginPath();
    ctx2d.arc(x, y, radius, 0, Math.PI * 2);
    ctx2d.fill();
    ctx2d.restore();
  }

  strokeRect(x, y, w, h) {
    const {ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.strokeRect(x, y, w, h);
  }

  clearCanvas(x = 0, y = 0, w = this.width, h = this.height) {
    const {ctx2d} = this;
    if (!ctx2d) {
      return;
    }
    ctx2d.clearRect(x, y, w, h);
  }

  addFn(fn, color) {
    fn.color = color || '#' + Math.random().toString(16).slice(2, 8);
    this.fnList.push(fn);
  }

  checkCrosspoint(x) {
    const {leftX, rightX, leftY, rightY} = this;
    const rs = [];
    this.fnList.forEach(fn => {
      const y = fn(x);
      if (leftX <= x && x <= rightX && leftY <= y && y <= rightY) {
        rs.push({x, y});
      }
    });
    return rs;
  }

  formatNum(num, fixedCount) {
    return parseFloat(num.toFixed(fixedCount));
  }



}


