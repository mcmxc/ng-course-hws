var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(year, engineVolume, power, isWorking, color) {
        this.year = year;
        this.engineVolume = engineVolume;
        this.power = power;
        this.isWorking = isWorking;
        this.color = color;
    }
    Car.prototype.move = function (direction, speed) {
        if (!this.isWorking)
            this.startEngine();
        console.log("car is moving to the " + direction + " with a speed of " + speed + " km/h");
        this.stopEngine();
    };
    Car.prototype.startEngine = function () {
        this.isWorking = true;
        console.log('car engine has been started');
    };
    Car.prototype.stopEngine = function () {
        this.isWorking = false;
        console.log('car engine has been stopped');
    };
    Object.defineProperty(Car.prototype, "carColor", {
        get: function () {
            return this.color.getColor();
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var BMW = (function (_super) {
    __extends(BMW, _super);
    function BMW(year, engineVolume, power, isWorking, color, maxSpeed) {
        var _this = _super.call(this, year, engineVolume, power, isWorking, color) || this;
        _this.year = year;
        _this.engineVolume = engineVolume;
        _this.power = power;
        _this.isWorking = isWorking;
        _this.color = color;
        _this.maxSpeed = maxSpeed;
        _this.manufacturer = 'BMW';
        return _this;
    }
    BMW.prototype.move = function (direction, speed) {
        if (speed <= this.maxSpeed) {
            _super.prototype.move.call(this, direction, speed);
        }
        else {
            console.log("too fast for this " + this.manufacturer + ", man");
        }
    };
    return BMW;
}(Car));
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(year, engineVolume, power, isWorking, color, maxSpeed) {
        var _this = _super.call(this, year, engineVolume, power, isWorking, color) || this;
        _this.year = year;
        _this.engineVolume = engineVolume;
        _this.power = power;
        _this.isWorking = isWorking;
        _this.color = color;
        _this.maxSpeed = maxSpeed;
        _this.manufacturer = 'Audi';
        return _this;
    }
    Audi.prototype.move = function (direction, speed) {
        if (speed <= this.maxSpeed) {
            _super.prototype.move.call(this, direction, speed);
        }
        else {
            console.log("too fast for this " + this.manufacturer + ", man");
        }
    };
    return Audi;
}(Car));
var initColorHex = {
    hexCode: '323232',
    getColor: function () {
        return "#" + this.hexCode;
    }
};
var initColorRGB = {
    r: 155,
    g: 33,
    b: 205,
    getColor: function () {
        var _a = this, r = _a.r, g = _a.g, b = _a.b;
        return "RGB(" + r + ", " + g + ", " + b + ")";
    }
};
var x6 = new BMW(2015, 3.3, 226, true, initColorHex, 285);
console.log(x6.carColor);
x6.move('top', 180);
var q7 = new Audi(2016, 4.7, 290, false, initColorRGB, 320);
console.log(q7.carColor);
q7.move('bottom', 200);
q7.move('left', 330);
